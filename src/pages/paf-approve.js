import React from "react"
import Layout from "../components/layout"
import {makeStyles} from '@material-ui/core/styles'
import blackSwoosh from "../images/BackgroundSwooshBlack.png"


const withStyles = makeStyles((theme) => ({
  thankYouRoot:{
    display: "flex",
    backgroundImage: `url(${blackSwoosh})`,
    backgroundSize: "cover",
    flexDirection: "column",
    backgroundRepeat: "no-repeat",
    backgroundPositionY: "140px",
    backgroundPositionX: "center",
    backgroundColor: "black",
    paddingTop: "20%",
    paddingRight: "30px",
    justifyContent: "flex-start",
    height: "100vh",
    padding: "20px",
    "@media(max-width:800px)": {
        justifyContent: "center",
    },
    "@media(max-width:600px)": {

        backgroundSize: "cover",
        backgroundPositionY: "60px"
    }

  },
  thankYouMessage:{
    display: "flex",
    fontSize: "2.0rem",
    fontWeight: "bold",
    marginLeft:"auto",
    marginRight: "auto",
    color: "white",
    lineHeight: "2.5rem",
    textAlign: "center"
  },
  thankYouMessageItalics: {
    display: "flex",
    fontSize: "2.0rem",
    fontWeight: "bold",
    marginLeft:"auto",
    marginRight: "auto",
    color: "white",
    lineHeight: "2.5rem",
    textAlign: "center",
    fontStyle: "italic"
  },
  thankYouMessageWrapper: {
    display: "flex",
    flexDirection: "column",  
    justifyContent: "center",
    marginLeft: "20px",
    marginRight: "20px"
  }

}));

const PafApprove = () => {
  const classes = withStyles();
  return (
  <Layout showContact={false}>
    <div className={classes.thankYouRoot}>
      <div className={classes.thankYouMessageWrapper}>
        <p className={classes.thankYouMessage}>Your annual USPS PAF submission </p>
        <p className={classes.thankYouMessage}>has been received and accepted. </p>
        <p className={classes.thankYouMessageItalics}>Thank you!</p>
      </div>
    </div>
  </Layout>
  )
}

export default PafApprove