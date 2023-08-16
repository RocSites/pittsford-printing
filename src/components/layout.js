import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {makeStyles} from "@material-ui/core/styles"
import Header from "./header"
import Typography from '@material-ui/core/Typography'
import "./layout.css"

const withStyles = makeStyles(() => ({
  "@global":{
    p:{
        // fontFamily: "Raleway, sans-serif"
    }
  },
    layoutRoot: {
      display: "flex",
      flexDirection: "column"
    },
    mainContent: {
      flexGrow: 1,
      minHeight: "100vh"
    },
    footerRoot:{
      background: "#0074eb",
      color: "black",
      display: "flex",
      minHeight: "50px"
    },
    footerContent: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      flexDirection: "column"

    },
    copyrightText: {
      marginTop: "auto",
      marginBottom: "auto",
      "@media(max-width: 600px)":{
        textAlign: "center"
      }
    },
    dougDesignText: {
      fontSize: "0.7rem"
    },
    footerPhone:{
      marginTop: "auto",
      marginBottom: "auto",
      color: "white",
      "@media(max-width: 600px)":{
        textAlign: "center"
      }
    },
    footerAddress:{
      marginTop: "auto",
      marginBottom: "auto",
      "@media(max-width: 600px)":{
        textAlign: "center"
      }
    },
    list: {
      width: "200px"
    }
})) 

const Layout = ({ children }) => {
  const classes = withStyles();

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className={classes.layoutRoot}>
        <main className={classes.mainContent}>{children}</main>
        <footer class="footerRoot">
          <div className={classes.footerContent}>
            <p className={classes.copyrightText}> © {new Date().getFullYear()} Pittsford Printing</p>
            <p class="rocsitesText">Website created and maintained by <span><a href="https://www.rocsites.com/" target="_blank">RocSites</a></span></p>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
