import React from "react"
import Layout from "../components/layout"
import {makeStyles} from '@material-ui/core/styles'

const withStyles = makeStyles((theme) => ({
  thankYouRoot:{
    display: "flex",
    minHeight: "100vh",
    flexDirection: "column",
    justifyContent: "flex-start",
    backgroundColor: "darkgray"
  },
  thankYouMessage:{
    display: "flex",
    fontSize: "2.0rem",
    marginLeft:"auto",
    marginRight: "auto",
    color: "black",
    lineHeight: "2.5rem",
    textAlign: "center"
  
  },
  thankYouMessageWrapper: {
    display: "flex",
    flexDirection: "column",  
    justifyContent: "center",
    marginTop: "400px",
    marginLeft: "20px",
    marginRight: "20px",
    "@media(max-width: 600px)": {
      marginTop: "200px",

    }
  }

}));

const ThankYou = () => {
  const classes = withStyles();
  return (
  <Layout showContact={false}>
    <div className={classes.thankYouRoot}>
      <div className={classes.thankYouMessageWrapper}>
        <p className={classes.thankYouMessage}>Thank you for your submission! </p>
        <p className={classes.thankYouMessage}>We'll be in touch shortly.</p>
      </div>
    </div>
  </Layout>
  )
}

export default ThankYou