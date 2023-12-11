import React from "react"
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import ReCAPTCHA from "react-google-recaptcha"
import FileUpload from "./fileUpload";
import { Link, navigate } from "gatsby"
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


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
      borderRadius: "3px",
      fontWeight: "normal",
      background: theme.palette.background.default
    },
    "& textarea": {
      fontWeight: "normal",
      height: "100px",
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
    justifyContent: "center"
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

const SendFile = (props) => {

  const classes = withStyles();

  // const handleSubmit = () => {
  //   navigate("/thank-you")
  // }

  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const SignupSchema = Yup.object().shape({
    name: Yup.string()
      .required('Please enter your name'),
    email: Yup.string().email('Invalid email').required('Please enter a valid email'),
    company: Yup.string(),
    phone: Yup.string()
      .matches(phoneRegExp, 'Please provide a valid phone number'),
    extraInfo: Yup.string()
  });

  const submitForm = async (values) => {
    console.log(values)
    const response = await fetch(
      'https://pnyv5y4jkruaruzcwpi3mb3hli0jamay.lambda-url.us-east-1.on.aws/',
      {
        method: 'POST',
        headers: {
         
        }
      }
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response;
  };

  return (
    <div id="sendFile" className={classes.formRoot}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          company: '',
          phone: '',
          extraInfo: ''
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
          await submitForm(values);
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <input type="hidden" name="bucket" value="pittsford-printing-send-file" />

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
              <label htmlFor="phone">Phone</label>
              <Field name="phone" />
              {errors.phone && touched.phone ? <div class="formErrorText">{errors.phone}</div> : null}
            </div>

            <div className={classes.formEmail}>
              <label htmlFor="email">Email</label>
              <Field name="email" type="email" />
              {errors.email && touched.email ? <div class="formErrorText">{errors.email}</div> : null}

            </div>

            <div className={classes.formEmail}>
              <label htmlFor="extraInfo">Anything else we should know?</label>
              <Field name="extraInfo" type="extraInfo" />
            </div>
            <div className={classes.captchaWrapper}>
              <ReCAPTCHA sitekey="6Le2xqwaAAAAAIIYnSh04me11jxlWXvz2ITqWoU0" />
            </div>
            <FileUpload bucket="pittsford-printing-send-file" />
            <div className={classes.submitButtonWrapper}>
              <button className={classes.submitButton} type="submit" disabled={isSubmitting}>Send File</button>
            </div>
          </Form>
        )}
      </Formik>
      <form
        name="pprint-send-file-form"
        method="POST"
        action="https://pnyv5y4jkruaruzcwpi3mb3hli0jamay.lambda-url.us-east-1.on.aws/"
      // onSubmit={event => {
      //   event.preventDefault()
      //   navigate("/thank-you")
      // }}
      >
        <input type="hidden" name="bucket" value="pittsford-printing-send-file" />
        <div className={classes.formEmail}>
          <label>Name (required)</label>
          <input type="" name="name" />
        </div>
        <div className={classes.formEmail}>
          <label>Company</label>
          <input type="" name="company" />
        </div>
        <div className={classes.formEmail}>
          <label>Phone Number (required)</label>
          <input type="" name="phone" />
        </div>
        <div className={classes.formEmail}>
          <label>Email (required)</label>
          <input type="email" name="email" />
        </div>
        <div className={classes.formTextarea}>
          <label>Anything else we should know?</label>
          <textarea name="message" />
        </div>
        <div className={classes.captchaWrapper}>
          <ReCAPTCHA sitekey="6Le2xqwaAAAAAIIYnSh04me11jxlWXvz2ITqWoU0" />
        </div>

        <FileUpload bucket="pittsford-printing-send-file" />
        <div className={classes.submitButtonWrapper}>
          <button className={classes.submitButton} type="submit">Send File</button>
        </div>

      </form>

      <br />
    </div>
  )
}

export default SendFile
