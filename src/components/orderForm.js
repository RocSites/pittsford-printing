import React, { useState, useMemo, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import FileUpload from "./fileUpload";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link, navigate } from "gatsby"
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { v4 as uuidv4 } from 'uuid';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import Recaptcha from './recaptcha';

const withStyles = makeStyles((theme) => ({
  formRoot: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: "column",
    backgroundColor: "#f7edd4",
    color: theme.palette.text.primary,
    fontWeight: "bold",
    "& input": {
      borderRadius: "15px",
      padding: "6px 10px",
      fontWeight: "normal",
      background: theme.palette.background.default,
    },
    "& textarea": {
      fontWeight: "normal",
      height: "100px",
      borderRadius: "15px",
      padding: "6px 10px",
      background: theme.palette.background.default
    },
    "& form": {
      marginTop: "1.5rem",
      width: "40%",
      "@media(max-width: 650px)": {
        width: "75%"
      }
    }
  },
  formHeader: {
    fontSize: "2.0rem",
    fontWeight: "bold",
    textAlign: "center"
  },
  formEmail: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    margin: "10px",
    // fontFamily: "Raleway, sans-serif"
  },
  formTextarea: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    margin: "10px",
    marginBottom: "20px",
    // fontFamily: "Raleway, sans-serif"
  },
  submitButton: {
    margin: "20px",
    backgroundColor: "#001841",
    color: theme.palette.background.paper,
    borderColor: "#001841",
    borderRadius: "35px",
    padding: "15px",
    paddingLeft: "25px",
    paddingRight: "25px",
    textTransform: "none",
    fontSize: "1.0rem",
    width: "190px",
    fontWeight: "bold",
    '&:hover': {
      backgroundColor: "#001841",
      boxShadow: 'none',
      cursor: "pointer"
    },
  },
  submitButtonWrapper: {
    display: "flex",
    justifyContent: "center",
    marginTop: "25px"
  },
  captchaWrapper: {
    margin: "10px"
  },
  footerPhone: {
    color: "black",
    textDecoration: "none",
    // fontFamily: "Raleway, sans-serif"
  }

}));

const OrderForm = (props) => {

  const classes = withStyles();

  const [sendFileFormLoading, setSendFileFormLoading] = useState(false);

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .required('Please enter your name'),
    email: Yup.string().email('Invalid email').required('Please enter a valid email'),
    company: Yup.string(),
    phone: Yup.string()
      .required("Please enter a phone number")
      .matches(phoneRegExp, 'Please provide a valid phone number, no spaces or special characters please'),
    message: Yup.string(),

  });

  const submitForm = async (values) => {
    setSendFileFormLoading(true)
    values.files = Object.values(values.files).filter(Boolean).filter(file => file.uploaded && !file.deleted)
    values.bucket = props.bucket
    const response = await fetch(
      'https://pnyv5y4jkruaruzcwpi3mb3hli0jamay.lambda-url.us-east-1.on.aws/',
      {
        method: 'POST',
        headers: {
          // "content-type": "application/json"
        },
        body: JSON.stringify(values)
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      setSendFileFormLoading(false)
      navigate("/thank-you")
    }

    return response;
  };

  return (
    <div id="orderForm" className={classes.formRoot}>

      <Formik
        initialValues={{
          name: '',
          email: '',
          company: '',
          phone: '',
          message: '',
          files: {
            initial: {
              uploaded: false
            }
          }
        }}
        validate={(values) => {
          if(props.uploadRequired === true) {
            if (!Object.values(values.files).filter(Boolean).some(f => f.uploaded)) {
              return {
                files: "Please select a file to upload."
              }
            }
          }
    
        }}
        validationSchema={SignupSchema}
        onSubmit={submitForm}
      >
        {({ errors, touched, values, setFieldValue, isSubmitting, isValid, dirty, getFieldProps }) => (
          <Form>
            <Field type="hidden" name="bucket" value={props.bucket} />

            <div className={classes.formEmail}>
              <label htmlFor="name">Name (required)</label>
              <Field name="name" />
              {errors.name && touched.name ? (
                <div class="formErrorText">{errors.name}</div>
              ) : null}
            </div>

            <div className={classes.formEmail}>
              <label htmlFor="company">Company</label>
              <Field name="company" />
            </div>

            <div className={classes.formEmail}>
              <label htmlFor="phone">Phone (required)</label>
              <Field name="phone" />
              {errors.phone && touched.phone ? <div class="formErrorText">{errors.phone}</div> : null}
            </div>

            <div className={classes.formEmail}>
              <label htmlFor="email">Email (required)</label>
              <Field name="email" type="email" />
              {errors.email && touched.email ? <div class="formErrorText">{errors.email}</div> : null}

            </div>

            <div className={classes.formEmail}>
              <label htmlFor="message">{props.messageText ? props.messageText : "Detailed Project Description"}</label>
              <Field name="message" component="textarea" />
            </div>
            <div className={classes.captchaWrapper}>
              <GoogleReCaptchaProvider reCaptchaKey="6Lf9Sj8pAAAAANYliYrX3MJdWxOWL9N4khq_ZhDW">
                <Recaptcha />
              </GoogleReCaptchaProvider>
            </div>
            {Object.keys(values.files).filter(k => !values.files[k].deleted).reverse().map((k) => (
              <div key={k}>
                <FileUpload
                  setFileUploaded={val => setFieldValue(`files.${k}.uploaded`, val)}
                  setFileType={val => setFieldValue(`files.${k}.file_type`, val)}
                  setS3Path={val => setFieldValue(`files.${k}.file_name`, val)}
                  onDelete={val => setFieldValue(`files.${k}.deleted`, true)}
                  bucket={props.bucket} />
                <br />
              </div>
            ))}

            <button
              style={{ padding: "6px", borderRadius: "15px", width: "200px" }}
              type="button"
              onClick={() => setFieldValue("files", {
                [uuidv4()]: {
                  uploaded: false
                },
                ...values.files
              })}
            >
              Upload Another File
            </button>
            {errors.files ? <p class="formErrorText">{errors.files}</p> : null}

            <div className={classes.submitButtonWrapper}>
              <button
                disabled={!isValid || isSubmitting || !dirty}
                className={!isValid || isSubmitting || !dirty ? `orderQuoteSubmitButtonDisabled` : `orderQuoteSubmitButtonEnabled`}
                type="submit"
              >
                {props.actionTitle}
              </button>
            </div>
          </Form>
        )}
      </Formik>
      <Box sx={{ width: '100%' }}>
        {sendFileFormLoading === true ? <LinearProgress /> : null}
      </Box>
    </div>
  )
}

export default OrderForm
