import React, { useState } from 'react'
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
    color: "white",
    backgroundColor: "transparent",
    justifyContent: "space-between",
    width: "100%",
    height: "112px",
    top: 0,
    boxShadow: "none",
    zIndex: "1",
  },
  navBarTitle: {
    maxWidth: 960,
    color: "white",
    padding: `1.45rem 1.0875rem`,
    "@media(max-width: 600px)": {
      margin: "auto"
    }
  },
  navButton: {
    color: "black",
    // fontWeight: "bold",
    textTransform: "none",
    margin: "auto 10px",
    textDecoration: "none",
    fontFamily: '"Roboto", "Helvetica", "Arial", "sans-serif"',
    color: "white",
    // fontWeight: "bold"
  },
  navBarButtonWrapper: {
    display: "flex",
    color: "white",
    margin: "10px",
    "@media(max-width: 600px)": {
      display: "none"
    }
  },
  navBarHamburgerDrawerWrapper: {
    display: "none",
    "@media(max-width: 601px)": {
      display: "flex",
      margin: "auto 10px"
    }
  },
  navLogo: {
    display: "flex",
    width: "150px",
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
    "@media(max-width: 600px)": {
      fontSize: "0.8rem",
      fontWeight: "bold",
      margin: "auto",
      width: "120px",
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
}
}))


const Header = ({ siteTitle }) => {

  const classes = withStyles();
  const [openDrawer, setOpenDrawer] = useState(false)

  const toggleDrawer = () => {
    setOpenDrawer(drawerOpen => !drawerOpen)
  }

  return (
    <header
      className={classes.navBarRoot}
    >
      <div className={classes.navLeftWrapper}>
        <div className={classes.navBarTitle}>
          <Link to="/" style={{ color: '#001841', textDecoration: `none` }}>
            <img className={classes.navLogo} src={PittsfordPrintingMainLogo} alt="company logo" />
          </Link>
        </div>
        <div className={classes.navBarButtonWrapper}>
          <AnchorLink className={classes.navButton}
            to="/#services" title="Services">
          </AnchorLink>
          <AnchorLink className={classes.navButton}
            to="/#about" title="About">
          </AnchorLink>
          <AnchorLink className={classes.navButton}
            to="/#contact" title="Contact Us">
          </AnchorLink>

          <Button
            className={classes.navCallButton}
            target="_blank" href="tel:(585) 383-0150"
          >
            <PhoneIcon sx={{color: "red"}} class="drawerPhoneIcon" />
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
          <PhoneIcon sx={{color: "red", fontWeight: "bold", marginRight: "5px"}} class="drawerPhoneIcon" />
          Call Us
        </Button>
        <MenuIcon
          className={classes.hamburgerIcon}
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
                  to="/#sectionOne" title="Services">
                </AnchorLink>
                <AnchorLink className={classes.navButtonMobile}
                  to="/#sectionTwo" title="About Us">
                </AnchorLink>
                <AnchorLink className={classes.navButtonMobile}
                  to="/#sectionThree" title="Contact Us">
                </AnchorLink>
              </div>

              <Button
                class="drawerItemLogin"
                target="_blank" href="tel:"
              >
                <PhoneIcon sx={{color: "red", marginRight: "10px"}} class="drawerPhoneIcon" />
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
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
