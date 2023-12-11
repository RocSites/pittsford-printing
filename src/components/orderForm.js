import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import ReCAPTCHA from "react-google-recaptcha"
import FileUpload from "./fileUpload";
import { Link } from "gatsby"


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

const OrderForm = (props) => {

  const classes = withStyles();

  const [name, setName] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value)
  }

  const formData = JSON.stringify({
    "name": name
  });


  return (
    <div id="orderForm" className={classes.formRoot}>
      {/* <form action="https://u2wvrjablvz5ivuys5s3ktnoha0vrkpq.lambda-url.us-east-1.on.aws/ " method="post"

        enctype="multipart/form-data">
        <label> Name (required)
          <input type="input" name="name" value={name} onChange={handleChange}/>
          <input type="submit" value="Send"/>
        </label>

      </form> */}

      <form
        name="pprint-new-order-form"
        method="POST"
        action="https://pnyv5y4jkruaruzcwpi3mb3hli0jamay.lambda-url.us-east-1.on.aws/"
      >
        <input type="hidden" name="bucket" value={props.actionTitle === "order" ? "pittsford-printing-orders" : "pittsford-printing-request-quote"} />
        <div className={classes.formEmail}>
          <label>Name (required)</label>
          <input type="text" name="name" />
        </div>
        <div className={classes.formEmail}>
          <label>Company</label>
          <input type="text" name="company" />
        </div>
        <div className={classes.formEmail}>
          <label>Phone Number (required)</label>
          <input type="text" name="phone" />
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

        </div>

        <div className={classes.captchaWrapper}>
          <ReCAPTCHA sitekey="6Le2xqwaAAAAAIIYnSh04me11jxlWXvz2ITqWoU0" />
        </div>
        <div>
          <div>
            <FileUpload bucket={props.actionTitle === "order" ? "pittsford-printing-orders" : "pittsford-printing-request-quote"} />
            <br />
          </div>
          <div>
            <FileUpload bucket={props.actionTitle === "order" ? "pittsford-printing-orders" : "pittsford-printing-request-quote"} />
            <br />
          </div>
          <div>
            <FileUpload bucket={props.actionTitle === "order" ? "pittsford-printing-orders" : "pittsford-printing-request-quote"} />
            <br />
          </div>
          <div>
            <FileUpload bucket={props.actionTitle === "order" ? "pittsford-printing-orders" : "pittsford-printing-request-quote"} />
            <br />
          </div>
          <div>
            <FileUpload bucket={props.actionTitle === "order" ? "pittsford-printing-orders" : "pittsford-printing-request-quote"} />
            <br />
          </div>
          
        </div>
        <div className={classes.submitButtonWrapper}>
          <button type="submit" className={classes.submitButton} >{props.actionTitle === "order" ? "Place Order" : "Request Quote"}</button>
        </div>
      </form>

    </div>
  )
}

export default OrderForm
