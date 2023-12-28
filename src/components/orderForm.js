import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import ReCAPTCHA from "react-google-recaptcha"
import FileUpload from "./fileUpload";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Link, navigate } from "gatsby"
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import MultipleFileUpload from './multipleFileUpload';

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
      background: theme.palette.background.default
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

  const [name, setName] = useState(null);
  const [s3Path, setS3Path] = useState(null);
  const [s3Paths, setS3Paths] = useState(null);
  const [fileTypes, setFileTypes] = useState(null);
  const [fileType, setFileType] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [sendFileFormLoading, setSendFileFormLoading] = useState(false);
  const [multipleFiles, setMultipleFiles] = useState(false);
  const [singleFileUpload, setSingleFileUpload] = useState(false);
  const [value, setValue] = useState("");

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
    values.file_name = s3Path;
    values.file_type = fileType;
    values.bucket = `${props.actionTitle === "order" ? "pittsford-printing-orders" : "pittsford-printing-request-quote"}`
    console.log(values)
    const response = await fetch(
      'https://pnyv5y4jkruaruzcwpi3mb3hli0jamay.lambda-url.us-east-1.on.aws/',
      {
        method: 'POST',
        headers: {
        },
        body: btoa(new URLSearchParams(values).toString())
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

  const handleChange = (event) => {
    let val = event.target.value;
    setValue(val)
    if(val === "single") {
      setSingleFileUpload(true)
      setMultipleFiles(false)
    } else if(val === "multiple") {
      setMultipleFiles(true);
      setSingleFileUpload(false)
    }
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
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          await submitForm(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Field type="hidden" name="bucket" value={props.actionTitle === "order" ? "pittsford-printing-orders" : "pittsford-printing-request-quote"} />

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
              <label htmlFor="message">Detailed Project Description</label>
              <Field name="message" component="textarea" />
            </div>
            <div className={classes.captchaWrapper}>
              <ReCAPTCHA sitekey="6Le2xqwaAAAAAIIYnSh04me11jxlWXvz2ITqWoU0" />
            </div>
            <div>How many files would you like to upload (maximum of 5)?</div>
            <div style={{ display: "flex", justifyContent: "center", margin: "auto" }}>
              <FormControl className={classes.formRoot}>
                <FormLabel id="demo-controlled-radio-buttons-group">Select an option:</FormLabel>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  onChange={handleChange}
                  value={value}
                  row
                >
                  <FormControlLabel value="single" control={<Radio />} label="Single file" />
                  <FormControlLabel value="multiple" control={<Radio />} label="Multiple files" />
                </RadioGroup>
              </FormControl>

            </div>

            <div>
              {singleFileUpload === true ? (
                <FileUpload setFileUploaded={setFileUploaded} setFileType={setFileType} setS3Path={setS3Path} bucket={props.actionTitle === "order" ? "pittsford-printing-orders" : "pittsford-printing-request-quote"} />

              ) : null}
              {multipleFiles === true ? (
                <MultipleFileUpload setFileUploaded={setFileUploaded} setFileTypes={setFileTypes} setS3Paths={setS3Paths} bucket={props.actionTitle === "order" ? "pittsford-printing-orders" : "pittsford-printing-request-quote"}/>
              ) : null
              }
            </div>

            {fileUploaded === false ? <p class="formErrorText">Please upload a file to submit your request.</p> : null}

            <div className={classes.submitButtonWrapper}>
              <button disabled={fileUploaded === false || sendFileFormLoading === true} style={{ padding: "6px", borderRadius: "15px", width: "200px" }} type="submit">{props.actionTitle === "order" ? "Place Order" : "Request Quote"}</button>
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
