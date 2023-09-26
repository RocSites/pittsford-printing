import React from 'react'
import BackgroundImage from "gatsby-background-image"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import rocRiver from "../images/yassine-khalfalli-river.jpg"
import signOne from "../images/tim-douglas-signjpg.jpg"
import printPaper from "../images/rombo-prints.jpg"
import bindingOne from "../images/anastasia-zhenina-binding.jpg"
import mailOne from "../images/erica-steeves-mail.jpg"
import EmailIcon from '@mui/icons-material/Email';
import graphicDesignOne from "../images/balazs-ketyi-graphic-design.jpg"
import windowGraphicOne from "../images/metin-ozer-window-graphic.jpg"
import manualOne from "../images/brett-jordan-manual.jpg"
import fiveStar from '../images/fiveStar.png'
import Divider from '@material-ui/core/Divider'
import PhoneIcon from '@material-ui/icons/Phone'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import StarRateIcon from '@material-ui/icons/StarRate';
import FacebookIcon from "../images/facebook_icon4.svg"
import InstagramIcon from "../images/instagram_icon4.svg"
import GoogleIcon from "../images/google_icon.png"
import PittsfordPrintingMainLogo from "../images/pittsford_printing_main_logo.png"
import "./main.css"

const withStyles = makeStyles(() => ({
    mainRoot: {
        display: "flex",
        flexDirection: "column",
    },
    landingWrapper: {
        display: "flex",
        // minHeight: "100vh",
        minHeight: "100vh",
        flexDirection: "column",
        margin: "auto"

    },
    aboutBackgroundImage: {
        width: "100%",
    },
    servicesWrapper: {
        display: "flex",
        flexWrap: "wrap",
        "@media(max-width:600px)": {
            flexDirection: "column",
            alignItems: "center",
        }
    },
    servicesItem: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        flex: "1 0 25%",
        margin: "5px",
        padding: "25px",
        "@media(max-width:600px)": {
            width: "100%"
        }
    },
    servicesImage: {
        width: "100%",
        aspectRatio: "1/1",
        objectFit: "cover",
        borderRadius: "5px"
    },
    servicesTitle: {
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: "20px",
        fontSize: "1.25rem",
        color: "#03178e",
    },
    servicesSubtitle: {
        marginBottom: "10px",
        fontSize: "0.9rem"
    },
    aboutWrapper: {
        display: "flex",
        margin: "auto",
        margin: "20px",
        color: "black",
        marginBottom: "50px",
        "@media(max-width: 600px)": {
            flexDirection: "column"
        }
    },
    servicesTitleHeader: {
        textAlign: "center",
        fontSize: "1.5rem",
        marginBottom: "20px"
    },
    aboutTextWrapper: {
        display: "flex",
        flexDirection: "column",
        maxWidth: "960px",
        margin: "20px",
        "& p": {
            opacity: "1.0"
        }
    },
    aboutText: {
        color: "black"
    },
    aboutImage: {
        width: "50%",
        maxHeight: "500px",
        maxWidth: "500px",
        "@media(max-width: 600px)": {
            width: "100%"
        }
    },
    servicesText: {
        color: "black"
    },
    projectImage: {
        width: "25%",
        margin: "25px",
        maxHeight: "350px"
    },
    imageWrapper: {
        display: "flex",
        justifyContent: "center",
        background: "white"
    },
    someOfWorkHeader: {
        textAlign: "center",
        fontSize: "2.5rem",
        color: "#03178e",
        padding: "10px",
        width: "100%",
        margin: "auto",
        "@media(max-width: 600px)": {
            width: "90%"
        }
    },
    landingMessageWrapper: {
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        opacity: "0.85",
        marginLeft: "0px",
        marginRight: "0px",
        height: "150px",
        "@media(max-width:650px)": {
            marginTop: "auto"
        }
    },
    landingPageHeader: {
        color: "black",
        // background: "#3587de",
        marginLeft: "0px",
        marginRight: "0px",
        fontSize: "3.0em",
        fontWeight: "500",
        textAlign: "center",
        margin: "auto"
    },
    landingPageSubHeader: {
        color: "black",
        // background: "#3587de",
        marginLeft: "0px",
        marginRight: "0px",
        fontSize: "2em",
        fontWeight: "500",
        fontFamily: "Roboto, sans-serif !important",
        textAlign: "center",
        margin: "auto",
        "@media(max-width: 600px)": {
            display: "none"
        }
    },
    landingPageSubHeaderMobile: {
        display: "none",
        "@media(max-width: 600px)": {
            display: "block",
            color: "black",
            // background: "#3587de",
            marginLeft: "0px",
            marginRight: "0px",
            fontSize: "2em",
            fontWeight: "100",
            fontFamily: "Roboto, sans-serif !important",
            textAlign: "center",
            margin: "auto"
        }
    },
    serviceDivider: {
        width: "15%",
        margin: "auto",
        marginTop: "1.5em",
        marginBottom: "1.5em",
        background: "white"
    },
    serviceWrapper: {
        paddingTop: "2.5em"
    },
    scrollToSectionOne: {
        height: "80px",
        // backgroundColor: "#f7edd4"
    },
    scrollToServices: {
        paddingBottom: "80px",
        backgroundColor: "#ffffff"
    },
    scrollToContact: {
        paddingBottom: "80px",
        backgroundColor: "#ffffff"
    },
    servicesListWrapper: {
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "1200px",
        margin: "auto"
    },
    servicesCard: {
        width: "calc(50% - 2.5em)",
        height: "400px",
        boxShadow: "none",
        backgroundColor: "#1563b2",
        "@media(max-width: 736px)": {
            width: "100%",
            margin: "1.25em 0 0 0"
        }
    },
    servicesCardLast: {
        display: "none",
        "@media(max-width: 600px)": {
            display: "flex",
            height: "100px",
            color: "transparent",
            backgroundColor: "transparent",
            boxShadow: "none"
        }
    },
    servicesCardContent: {
        position: "relative",
        textAlign: "center",
        color: "black",
        padding: 0,
        paddingBottom: "0 !important",
        margin: "10px",
        height: "400px"
    },
    servicesCardImage: {
        height: "100%",
        width: "100%",
    },
    servicesCardText: {
        position: "absolute",
        top: "80%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        fontSize: "1.5rem",
        fontWeight: "bold",
        width: "100%",
        backgroundColor: "#add8e685"
    },
    phoneEmailWrapper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        margin: "35px",
        "@media(max-width: 600px)": {
            flexDirection: "column",
            textAlign: "center",
            alignItems: "center"
        }
    },
    contactPhone: {
        color: "black",
        textDecoration: "none",
        fontFamily: "Roboto, sans-serif !important",
    },
    contactButton: {
        margin: "20px",
        backgroundColor: "#03178e",
        color: "white",
        borderColor: "#03178e",
        borderRadius: "35px",
        padding: "15px",
        paddingLeft: "25px",
        paddingRight: "25px",
        textTransform: "none",
        fontSize: "1.0rem",
        // width: "190px",
        fontWeight: "bold",
        '&:hover': {
            backgroundColor: "#001841",
            boxShadow: 'none',
            cursor: "pointer"
        },
    },
    emailA: {
        marginBottom: "20px",
        textDecoration: "none"
    },
    reviewsWrapper: {
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        alignItems: "center",
    },
    reviewClickText: {
        textTransform: "none"
    },
    reviewStarWrapper: {
        display: "flex",
        alignItems: "center"
    },
    reviewLink: {
        textDecoration: "none"
    },
    reviewCard: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#white",
        width: "250px",
        minHeight: "100px",
        margin: "10px",
        padding: "10px"
    },
    reviewCardText: {
        fontSize: "0.75rem"
    },
    reviewCardsWrapper: {
        display: "flex",
        flexWrap: "wrap",
        marginLeft: "15%",
        "@media(max-width: 600px)": {
            justifyContent: "center",
            marginLeft: "unset"
        }
    },
    phoneIcon: {
        marginRight: "10px"
    },
    contactWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    emailIcon: {
        marginRight: "10px"
    },
    bbbWrapper: {
        display: "flex",
        margin: "auto",
        marginTop: "0px",
        backgroundColor: "white",
        borderRadius: "14px",
        "@media(max-width:600px)": {
            flexDirection: "column",
            justifyContent: "center",
            height: "110px",
            marginBottom: "20px",
        }
    },
    bbbLink: {
        display: "flex",
        textDecoration: "none",
        padding: "10px",
    },
    bbbImage: {
        margin: "auto",
        padding: "10px",
        minWidth: "200px",
        maxWidth: "300px",
        maxHeight: "150px",
        borderRadius: "15px"
    },
    bbbYearsCircle: {
        width: "65px",
        height: "65px",
        backgroundColor: "#1f5a76",
        margin: "auto",
        marginRight: "10px",
        fontFamily: "Roboto, sans-serif !important",
        borderRadius: "14px"
    },
    bbbCirleText: {
        color: "white",
        opacity: "1 !important",
        fontWeight: "bold",
        textAlign: "center",
        fontSize: "2.0rem"
    },
    phBizCardWrapper: {
        display: "flex",
        justifyContent: "center"
    },
    phBizCardImage: {
        maxWidth: "300px",
        maxHeight: "200px"
    },
    fiveStar: {
        color: "#f5b81c"
    },
    hourText: {
        display: "flex",
        color: "black",
        margin: "10px auto",
        justifyContent: "center",
        fontSize: "1.25rem"
    },
    hourlyHeaderText: {
        display: "flex",
        justifyContent: "center",
        color: "black",
        fontSize: "1.25rem"
    },
    menuHeaderTextMenu: {
        display: "flex",
        justifyContent: "center",
        color: "black",
        fontSize: "1.25rem"
    },
    menuBlockWrapper: {
        display: "flex"
    },
    hourlyHeaderText: {
        display: "flex",
        justifyContent: "center",
        color: "black",
        fontSize: "1.75rem"
    },
    aboutTitleHeader: {
        textAlign: "center",
        fontSize: "2.5rem",
        color: "#03178e",
        // textTransform: "uppercase",
        marginBottom: "10px"
    },
    aboutTextBlue: {
        color: "#03178e",
    },
    addressText: {
        textAlign: "center",
        margin: "40px 0"
    },
    aboutWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    scrollToLocation: {
        height: "100px",
        flexDirection: "column"
    },
    connectHeader: {
        fontSize: "2rem",
        textAlign: "center",
        color: "black",
        // textTransform: "uppercase"
    },
    socialLinkWrapper: {
        display: "flex",
        justifyContent: "center",
        margin: "20px 0 40px 0"
    },
    aboutSectionWrapper: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        "& iframe": {
            "@media(max-width:600px)": {
                width: "90%",
                margin: "auto"
            }
        },

    },
    reviewHeader: {
        fontSize: "1.2rem",
        textTransform: "none",
        color: "white",
        margin: 0,
        marginRight: "10px"
    },
    socialFooterMargin: {
        height: "40px",
        width: "40px",
        margin: "10px auto"
    },
    socialFooter: {
        height: "40px",
        width: "40px",
        margin: "0 10px"
    },
    socialFacebookSpacing: {
        height: "40px",
        width: "40px",
        margin: "0 10px",
        marginBottom: "2px"
    },
    socialLink: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    reviewButton: {
        backgroundColor: "#333333",
        borderRadius: "35px",
        padding: "15px",
        border: "none"
    },
    container: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        margin: "20px 0",
    },
    servicesContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        padding: "20px 0",
        // backgroundColor: "#f7edd4"
    },
    actionSection: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        margin: "20px 0",
        marginTop: "8%",
        marginBottom: "8%",
        "@media(max-width:600px)": {
            flexDirection: "column"
        }
    },
    containerMarginBottomSmall: {
        display: "flex",
        flexDirection: "column",
        margin: "20px 0",
        marginBottom: "80px"
    },
    landingImage: {
        width: "100%",
        objectFit: "cover",
        aspectRatio: "1/1",
        height: "100vh",
        marginTop: "0px",
        marginBottom: "0px",
        filter: "brightness(0.5)"
    },
    mainBanner: {
        display: "flex",
        backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ),url(${rocRiver})`,
        // backgroundSize: "cover",
        backgroundPosition: "right",
        paddingTop: "25%",
        paddingRight: "30px",
        justifyContent: "flex-end",
        height: "100vh",
        padding: "20px",
        "@media(max-width:1200px)": {
            paddingTop: "30%",
        },
        "@media(max-width:800px)": {
            paddingTop: "50%",
            justifyContent: "center",
        },
        "@media(max-width:600px)": {
            paddingTop: "70%",
            backgroundPositionX: "66%",
            backgroundSize: "cover"
        }
    },
    mainBannerText: {
        color: "white",
        // fontSize: "3rem",
        fontSize: "5rem",
        textAlign: "right",
        fontWeight: "bold",
        lineHeight: "1.25",
        fontFamily: "Roboto, sans-serif !important",
        zIndex: 1,
        "@media(max-width:700px)": {
            fontSize: "2.5rem",
            textAlign: "center"
        }
    },
    actionButton: {
        height: "100px",
        borderRadius: "35px",
        backgroundColor: "#03178e",
        margin: "15px 0",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        textDecoration: "none",
        "& > span": {
            textTransform: "none",
            fontWeight: "bold",
            color: "white",
            fontSize: "1.5rem"
        },
        "&:hover": {
            backgroundColor: "#03178ead"
        },
        "@media(max-width:600px)": {
            marginTop: "25px"
        }
    },
    actionButtonInner: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        margin: "0 15px"
    },
    actionButtonText: {
        padding: "0 25px"
    },
    actionIcon: {
        marginRight: "5px"
    },
    actionButtonWrapper: {
        display: "flex",
        justifyContent: "space-evenly",
        width: "100%",
        "@media(max-width:600px)": {
            flexDirection: "column",
            alignItems: "center",
        }
    }

}))

const Main = () => {
    const classes = withStyles();
    const { mobileImage, desktopImage } = useStaticQuery(graphql`
    query { 
      desktopImage: file(relativePath: { eq: "yassine-khalfalli-roc-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileImage: file(relativePath: { eq: "yassine-khalfalli-roc-image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 650, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      
    }
  `)

    const sources = [
        mobileImage.childImageSharp.fluid,
        {
            ...desktopImage.childImageSharp.fluid,
            media: `(min-width: 650px)`
        }
    ]

    const FiveStar = () => {
        return (
            <div className={classes.fiveStar}>
                <StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon /><StarRateIcon />
            </div>
        )
    }


    return (
        <div className={classes.mainRoot}>
            <div className={classes.mainBanner}>
                {/* <button>Send a File</button> */}

                <Typography className={classes.mainBannerText}>
                    Printing & Mailing <br />... Made Easy
                </Typography>

            </div>

            <section class="actionSectionWrapper">
                <div className={classes.actionSection}>
                    {/* <div className={classes.container}>
                        <span className={classes.scrollToSectionOne} id="sectionOne"></span>
                    </div> */}
                    {/* <div className={classes.containerMarginBottomSmall}>
                        <Typography className={classes.someOfWorkHeader}>Let's Get Started</Typography>
                    </div> */}
                    <div className={classes.actionButtonWrapper}>
                        <div className={classes.actionButtonInner}>
                            <Link className={classes.actionButton} to="/order">
                                <Button className={classes.actionButton}>
                                    <ShoppingCartIcon className={classes.actionIcon} />
                                    Order/Quote Request
                                </Button>
                            </Link>
                            {/* <Typography className={classes.actionButtonText}>Already know what you'd like? Reoccurring order? Let's get started!</Typography> */}
                        </div>
                        {/* <div className={classes.actionButtonInner}>
                            <Link className={classes.actionButton} to="/request-quote">
                                <Button className={classes.actionButton}>
                                    <RequestQuoteIcon className={classes.actionIcon} />
                                    Request a Quote
                                </Button>
                            </Link>
                         
                        </div> */}
                        <div className={classes.actionButtonInner}>
                            <Link className={classes.actionButton} to="/send-file">
                                <Button className={classes.actionButton}>
                                    <CloudUploadIcon className={classes.actionIcon} />
                                    Send a File
                                </Button>
                            </Link>
                            {/* <Typography className={classes.actionButtonText}>Need to send something to us?</Typography> */}
                        </div>
                        <div className={classes.actionButtonInner}>
                            <a className={classes.actionButton} href="https://pittsfordprint.securepayments.cardpointe.com/pay?" target="_blank">
                                <Button className={classes.actionButton}>
                                    <ReceiptLongIcon className={classes.actionIcon} />
                                    Pay My Invoice
                                </Button>
                            </a>
                            {/* <Typography className={classes.actionButtonText}>Some placeholder text</Typography> */}
                        </div>

                    </div>
                </div>

            </section>
            <div className={classes.servicesContainer}>
                <span className={classes.scrollToSectionOne} id="services"></span>
            </div>
            <section class="servicesSectionWrapper">
                <Typography className={classes.someOfWorkHeader}>Our Services</Typography>
                <div className={classes.servicesWrapper}>
                    <div className={classes.servicesItem}>
                        <Typography className={classes.servicesTitle}>Wide Format Services</Typography>
                        <Typography className={classes.servicesSubtitle}>Posters, Signs, Banner, & Stickers</Typography>
                        <img className={classes.servicesImage} src={signOne} />
                    </div>
                    <div className={classes.servicesItem}>
                        <Typography className={classes.servicesTitle}>Printing Services</Typography>
                        <Typography className={classes.servicesSubtitle}>Offset, Digital Full Color, and B/W Printing</Typography>
                        <img className={classes.servicesImage} src={printPaper} />
                    </div>
                    <div className={classes.servicesItem}>
                        <Typography className={classes.servicesTitle}>Bindery & Finishing Services</Typography>
                        <Typography className={classes.servicesSubtitle}>Collating, Folding, Creasing, Laminating</Typography>
                        <img className={classes.servicesImage} src={bindingOne} />
                    </div>
                    <div className={classes.servicesItem}>
                        <Typography className={classes.servicesTitle}>Mailing Services</Typography>
                        <Typography className={classes.servicesSubtitle}>Full Service, Postal Presorting, Postage Discounts</Typography>
                        <img className={classes.servicesImage} src={mailOne} />
                    </div>
                    {/* <div className={classes.servicesItem}>
                        <Typography className={classes.servicesTitle}>Graphic Design Services</Typography>
                        <Typography className={classes.servicesSubtitle}>Business Stationery, Calenders, Logo Design</Typography>
                        <img className={classes.servicesImage} src={graphicDesignOne} />
                    </div> */}
                    {/* <div className={classes.servicesItem}>
                        <Typography className={classes.servicesTitle}>All Other Services</Typography>
                        <Typography className={classes.servicesSubtitle}>Manuals, Books, Business Cards, Embossing</Typography>
                        <img className={classes.servicesImage} src={manualOne} />
                    </div> */}
                </div>

                {/* <Link to="/chill-menu" class="menuContent menuLink chillBlock">
                    Page 2
                </Link>
                <Link to="/grill-menu" class="menuContent menuLink grillBlock">
                    Page 3
                </Link> */}
            </section>
            <span className={classes.scrollToLocation} id="about"></span>

            <section class="actionSectionWrapper">
                <div className={classes.container}>
                    <div className={classes.aboutWrapper}>
                        <div className={classes.aboutSectionWrapper}>
                            <Typography className={classes.aboutTitleHeader}>About Us</Typography>
                            {/* <Typography className={classes.addressText}>Section 3 subtext</Typography> */}
                            <Typography className={classes.aboutTextBlue}>Pittsford Printing is the premier printing provider for local businesses in Pittsford, NY area.
                                We specialize in printing, mailing, signs, posters, banners, stickers, decals and much more. We are known
                                for our excellent customer service, quality and competitive price.
                            </Typography>
                            <br />
                            <Typography className={classes.aboutTextBlue}>Originally part of a large printing franchise system, we first opened our doors for business in Pittsford
                                Plaza in August, 1988. Owners Carol and Russ Sherman were at the helm. In the summer of 2003, we changed our name to
                                Pittsford Printing and moved to our current, expanded location at 3750 Monroe Avenue. Our formula for success has always
                                been attention to detail and great customer service at an affordable price.
                            </Typography>
                            <br />
                            <Typography className={classes.aboutTextBlue}>
                                Since 1988 we have built a strong reputation for high quality standards. We care about
                                your satisfaction with every job we do for you. Put our experience to work for you! We go out of our way for the businesses we work with.
                                Our staff is dedicated to providing first class, professional and friendly service!
                            </Typography>
                            <br />
                            <Typography className={classes.aboutTextBlue}>We’re proud of the strong roots we’ve built in Monroe County. We pride ourselves on being a complete printing, mailing and copying
                                source and have always been on the leading edge of technology. We understand that an investment in technology can actually save money by improving efficiencies.
                            </Typography>
                            <br />
                            <Typography className={classes.aboutTextBlue}>
                                Whether your job is simple black and white copies or complex, full-color advertising packages, Pittsford Printing can produce it from concept to
                                finished product in the fastest possible time. We offer design and type services, one to 4-color offset printing, digital B/W, digital color copying/printing,
                                and bulk mailing services of any size. Pittsford Printing would like to be your printer – give us a call!
                            </Typography>
                        </div>
                    </div>
                </div>
            </section>

            <span className={classes.scrollToContact} id="contact"></span>
            <section class="py-5 section-bubble4">
                <div className={classes.container}>
                    <div>
                        <Typography className={classes.connectHeader}>Connect With Us</Typography>
                        <div className={classes.phoneEmailWrapper}>
                            <a href="tel:(585) 383-0150" className={classes.contactPhone}>
                                <Button className={classes.contactButton}>
                                    <PhoneIcon className={classes.phoneIcon} />
                                    (585) 383-0150
                                </Button>
                            </a>
                            <div className={classes.contactWrapper}>
                                {/* <Typography>General Questions</Typography> */}
                                <a href="mailto:info@pittsfordprinting.com" className={classes.contactPhone}>
                                    <Button className={classes.contactButton}>
                                        <EmailIcon className={classes.phoneIcon} />
                                        info@pittsfordprinting.com
                                    </Button>
                                </a>
                            </div>
                            {/* <div className={classes.contactWrapper}>
                                <Typography>Katie Sherman</Typography>
                                <a href="mailto:katie@pittsfordprinting.com" className={classes.contactPhone}>
                                    <Button className={classes.contactButton}>
                                        <EmailIcon className={classes.phoneIcon} />
                                        katie@pittsfordprinting.com
                                    </Button>
                                </a>
                            </div> */}

                        </div>
                        <div className={classes.reviewsWrapper}>
                            <a className={classes.reviewLink}
                                href=""
                                target="_blank"
                            >
                                <Button
                                    className={classes.reviewButton}
                                >
                                    <div className={classes.reviewStarWrapper}>
                                        <Typography className={classes.reviewHeader}>Leave us a review!</Typography>
                                        <img className={classes.socialFooterMargin} src={GoogleIcon} />
                                        {/* <FiveStar /> */}
                                    </div>
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Main
