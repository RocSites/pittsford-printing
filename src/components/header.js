import React, { useState, useEffect } from 'react'
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { makeStyles } from '@material-ui/core'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Button from '@material-ui/core/Button'
import PittsfordPrintingMainLogo from "../images/pittsford_printing_main_logo.png"
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from "../images/facebook_icon4.svg"
import InstagramIcon from "../images/instagram_icon4.svg"
import { AnchorLink } from "gatsby-plugin-anchor-links";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

import "./main.css"

const withStyles = makeStyles(() => ({
  "@global": {
    "*": {
      fontFamily: "Roboto, sans-serif !important",
      fontWeight: "100"
    }
  },
  navBarRoot: {
    position: "absolute",
    display: "flex",
    color: "black",
    backgroundColor: "white",
    justifyContent: "space-between",
    width: "80%",
    top: 0,
    left: 0,
    right: 0,
    margin: "0px auto",
    height: "180px",
    boxShadow: "none",
    zIndex: "1",
    "@media(max-width: 1200px)": {
      position: "fixed",
      display: "flex",
      // background: "#4c86d1",
      backgroundColor: "white",
      color: "white",
      justifyContent: "space-between",
      width: "100%",
      top: 0,
      boxShadow: "1px 0 10px 0 rgb(89 98 115 / 20%)",
      zIndex: 2,
    }
  },
  navBarRootScroll: {
    position: "fixed",
    display: "flex",
    // background: "#4c86d1",
    backgroundColor: "white",
    color: "white",
    justifyContent: "space-between",
    width: "100%",
    top: 0,
    boxShadow: "1px 0 10px 0 rgb(89 98 115 / 20%)",
    zIndex: 2,
  },
  navBarTitle: {
    maxWidth: 960,
    color: "white",
    padding: `1.45rem 1.0875rem`,
    "@media(max-width: 600px)": {
      margin: "auto",
      padding: "0.25rem"
    }
  },
  navButton: {
    color: "black",
    // fontWeight: "bold",
    textTransform: "none",
    margin: "auto 10px",
    textDecoration: "none",
    fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
    // fontWeight: "bold"
  },

  navButtonScroll: {
    color: "black",
    textTransform: "none",
    margin: "auto 10px",
    textDecoration: "none"
  },
  navBarButtonWrapper: {
    display: "flex",
    color: "white",
    margin: "10px",
    "@media(max-width: 1000px)": {
      display: "none"
    }
  },
  navBarHamburgerDrawerWrapper: {
    display: "none",
    "@media(max-width: 1001px)": {
      display: "flex",
      margin: "auto 10px"
    }
  },
  navLogo: {
    display: "flex",
    width: "340px",
    margin: "auto",
  },
  navLogoScroll: {
    display: "flex",
    width: "250px",
    margin: "auto",
  },
  drawerItem: {
    "&:hover": {
      backgroundImage: "#03178ed1",
      border: "1px solid #03178ed1",
      color: "white"
    },
    "&:selected:hover": {
      backgroundImage: "#03178ed1",
      border: "1px solid #03178ed1",
      color: "white"
    }
  },
  list: {
    width: "250px"
  },
  hamburgerIcon: {
    margin: "20px",
    fontSize: "2.5rem",
    color: "white",
    // color: "#eb0e2b",
    "@media(min-width: 1001px)": {
      display: "none"
    },
    "@media(max-width: 1000px)": {
      color: "#0047bb",
      margin: "1rem",
    }
  },
  hamburgerIconScroll: {
    color: "#0047bb",
    margin: "1rem",
    fontSize: "2.5rem",
    "@media(min-width: 601px)": {
      display: "none"
    }
  },
  navLeftWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%"
  },
  navCallButton: {
    display: "flex",
    backgroundColor: "#03178e",
    padding: "8px 16px",
    color: "white",
    textTransform: "none",
    borderRadius: "35px",
    height: "50px",
    margin: "auto 20px",
    "& > span": {
      fontWeight: "bold"
    }
  },
  navCallButtonMobile: {
    display: "flex",
    backgroundColor: "#03178e",
    padding: "8px 16px",
    color: "white",
    textTransform: "none",
    borderRadius: "35px",
    height: "50px",
    margin: "auto 20px",
    "&:hover": {
      backgroundColor: "#03178ed1",
      border: "1px solid #03178ed1",
    },
    "@media(max-width: 1000px)": {
      fontSize: "0.8rem",
      fontWeight: "bold",
      margin: "auto",
      width: "104px",
      "&:hover": {
        backgroundColor: "#03178ed1",
        border: "1px solid #03178ed1",
      },
    }
  },
  drawerLinkWrapper: {
    display: "flex",
    flexDirection: "column",
  },
  navButtonMobile: {
    color: "black",
    // fontWeight: "bold",
    textTransform: "none",
    margin: "10px 16px",
    textDecoration: "none",
  },
  bottomHeaderRoot: {
    // backgroundColor: "#1ba8e2",
    backgroundColor: "#03178e",
    position: "relative",
    top: 180,
    height: "50px",
    width: "80%",
    margin: "auto",
    borderBottomRightRadius: "25px",
    borderBottomLeftRadius: "25px",
    "@media(max-width: 1200px)": {
      width: "100%",
      borderBottomRightRadius: "0px",
      borderBottomLeftRadius: "0px",
    }
  },
  bottomHeaderButton: {
    textTransform: "none",
    "& > span": {
      color: "white"
    }
  },
  bottomHeaderIcon: {
    margin: "0 5px"
  }
}))


const Header = ({ siteTitle }) => {

  const classes = withStyles();
  const [openDrawer, setOpenDrawer] = useState(false)

  const toggleDrawer = () => {
    setOpenDrawer(drawerOpen => !drawerOpen)
  }

  //navbar scroll when active state
  const [navbarScroll, setNavbarScroll] = useState(false)

  //logo scroll when active
  const [navBarColor, setNavBarColor] = useState("white")

  //navbar scroll changeBackground function
  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setNavbarScroll(true)
    } else {
      setNavbarScroll(false)
    }
  }

  useEffect(() => {
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })

  //logo scroll function
  const changeColor = () => {
    if (window.scrollY >= 60) {
      setNavBarColor("white")
    } else {
      setNavBarColor("white")
    }
  }

  useEffect(() => {
    changeColor()
    // adding the event when scroll change Logo
    window.addEventListener("scroll", changeColor)
  })

  return (
    <div style={{ marginBottom: "-50px" }}>
      <header
        className={navbarScroll ? classes.navBarRootScroll : classes.navBarRoot}
      >
        <div className={classes.navLeftWrapper}>
          <div className={classes.navBarTitle}>
            <Link to="/" style={{ color: '#001841', textDecoration: `none` }}>
              <img className={navbarScroll ? classes.navLogoScroll : classes.navLogo} src={PittsfordPrintingMainLogo} alt="company logo" />
            </Link>
          </div>
          <div className={classes.navBarButtonWrapper}>

            <AnchorLink className={navbarScroll ? classes.navButtonScroll : classes.navButton}
              to="/#services" title="Services">
            </AnchorLink>
            <AnchorLink className={navbarScroll ? classes.navButtonScroll : classes.navButton}
              to="/#about" title="About">
            </AnchorLink>
            <AnchorLink className={navbarScroll ? classes.navButtonScroll : classes.navButton}
              to="/#contact" title="Contact Us">
            </AnchorLink>

            <Button
              className={classes.navCallButton}
              target="_blank" href="tel:(585) 383-0150"
            >
              <PhoneIcon sx={{ color: "red" }} class="drawerPhoneIcon" />
              Call Us
            </Button>
          </div>
        </div>

        {/* <div class="socialLinkWrapperNav">
        <a href="" target="_blank" class="socialLink">
          <img class="socialNav" src={InstagramIcon} />
        </a>
        <a href="" target="_blank" class="socialLink">
          <img class="socialNavFb" src={FacebookIcon} />
        </a>
      </div> */}
        <div className={classes.navBarHamburgerDrawerWrapper}>
          <Button
            className={classes.navCallButtonMobile}
            target="_blank" href="tel:(585) 383-0150"
          >
            <PhoneIcon sx={{ color: "red", fontWeight: "bold", marginRight: "5px" }} class="drawerPhoneIcon" />
            Call Us
          </Button>
          <MenuIcon
            className={navbarScroll ? classes.hamburgerIconScroll : classes.hamburgerIcon}
            onClick={toggleDrawer}
          />
          <Drawer
            open={openDrawer}
            onClose={toggleDrawer}
            anchor="right"
            className={classes.drawerRoot}
          >
            <div
              className={classes.list}
              role="presentation"
              onClick={toggleDrawer}
              onKeyDown={toggleDrawer}
            >
              <List>
                <div className={classes.drawerLinkWrapper}>
                  <AnchorLink className={classes.navButtonMobile}
                    to="/#services" title="Services">
                  </AnchorLink>
                  <AnchorLink className={classes.navButtonMobile}
                    to="/#about" title="About Us">
                  </AnchorLink>
                  <AnchorLink className={classes.navButtonMobile}
                    to="/#contact" title="Contact Us">
                  </AnchorLink>
                </div>

                <Button
                  class="drawerItemLogin"
                  target="_blank" href="tel:"
                >
                  <PhoneIcon sx={{ color: "red", marginRight: "10px" }} class="drawerPhoneIcon" />
                  Call Us
                </Button>
                {/* <div class="socialLinkWrapperNavMobile">
                <a href="" target="_blank" class="socialLink">
                  <img class="socialDrawer" src={InstagramIcon} />
                </a>
                <a href="" target="_blank" class="socialLink">
                  <img class="socialDrawerFb" src={FacebookIcon} />
                </a>
              </div> */}
              </List>

            </div>
          </Drawer>

        </div>

      </header>
      <div className={classes.bottomHeaderRoot}>
        <div class="bottomHeaderWrapper">
          <Link className={classes.actionButton} to="/send-file">
            <Button className={classes.bottomHeaderButton}>
              <CloudUploadIcon className={classes.bottomHeaderIcon} />
              <p class="bottomHeaderButtonText">Send a File</p>
            </Button>
          </Link>
          <Link className={classes.actionButton} to="/order">
            <Button className={classes.bottomHeaderButton}>
              <ShoppingCartIcon className={classes.bottomHeaderIcon} />
              <p class="bottomHeaderButtonText">Place an Order</p>
            </Button>
          </Link>
          <Link className={classes.actionButton} to="/order">
            <Button className={classes.bottomHeaderButton}>
              <RequestQuoteIcon className={classes.bottomHeaderIcon} />
              <p class="bottomHeaderButtonText">Quote Request</p>
            </Button>
          </Link>
        </div>
      </div>
    </div>

  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
