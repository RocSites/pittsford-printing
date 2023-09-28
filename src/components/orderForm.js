import React from "react"
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import ReCAPTCHA from "react-google-recaptcha"
import FileUpload from "./fileUpload";

const withStyles = makeStyles((theme) => ({
  formRoot: {
    display: "flex",
    justifyContent: "center",
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

const OrderForm = (props) => {

  const classes = withStyles();

  return (
    <div id="orderForm" className={classes.formRoot}>
      <form
        name="pprint-new-order-form"
        method="POST"
        action="/thank-you"
      >
        <input type="hidden" name="pprint-new-order-form" value="pprint-new-order-form" />
        <div className={classes.formEmail}>
          <label>Name (required)</label>
          <input type="" name="" />
        </div>
        <div className={classes.formEmail}>
          <label>Company</label>
          <input type="" name="" />
        </div>
        <div className={classes.formEmail}>
          <label>Phone Number (required)</label>
          <input type="" name="" />
        </div>
        <div className={classes.formEmail}>
          <label>Email (required)</label>
          <input type="email" name="email" />
        </div>
        <div className={classes.formTextarea}>
          <label>Detailed Project Description</label>
          <textarea name="message" />
        </div>
        <div>
          <a class="uploadButton" href="https://wetransfer.com/" target="_blank">
            <p style={{ textAlign: "center", margin: "auto" }}>Upload File</p>
          </a>
        </div>
        <div className={classes.captchaWrapper}>
          <ReCAPTCHA sitekey="6Le2xqwaAAAAAIIYnSh04me11jxlWXvz2ITqWoU0" />
        </div>
        <div className={classes.submitButtonWrapper}>
          <button className={classes.submitButton} type="submit">{props.actionTitle === "order" ? "Place Order" : "Request Quote"}</button>
        </div>
      </form>
      {/* <FileUpload/> */}

    </div>
  )
}

export default OrderForm
