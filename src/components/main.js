import React, { useState, useEffect } from 'react'
import { StaticImage } from "gatsby-plugin-image"
import { useStaticQuery, graphql } from "gatsby"
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { Link } from "gatsby"
import Typography from '@material-ui/core/Typography'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box';
import Button from '@material-ui/core/Button'
import rocRiver from "../images/yassine-khalfalli-river.jpg"
import blackSwoosh from "../images/BackgroundSwooshBlack.png"
import redSwoosh from "../images/BackgroundSwooshRed.png"
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
import CloseIcon from '@mui/icons-material/Close';
import PhoneIcon from '@material-ui/icons/Phone'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import GoogleIcon from "../images/google_icon.png"
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
        justifyContent: "space-between",
        flex: "1 0 20%",
        margin: "5px",
        padding: "25px",
        "@media(max-width:600px)": {
            width: "100%"
        }
    },
    servicesImage: {
        width: "100%",
        maxWidth: "450px",
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
        "@media(max-width:1200px)": {
            paddingTop: "30%",
        },
        "@media(max-width:800px)": {
            paddingTop: "50%",
            justifyContent: "center",
        },
        "@media(max-width:600px)": {
            paddingTop: "60%",
            backgroundSize: "cover",
            backgroundPositionY: "60px"
        }
    },
    mainButtonLink: {
        display: "flex",
        width: "150px"
    },
    mainButtonLinkLarge: {
        display: "flex",
        width: "165px",
        marginTop: "5px"
    },
    mainButtonImage: {
        margin: "auto",
        "& img": {
            height: "auto",
            objectFit: "contain !important"
        }
    },
    mainBannerText: {
        color: "white",
        fontSize: "4rem",
        textAlign: "right",
        fontWeight: "bold",
        lineHeight: "1.5",
        margin: "80px 0",
        width: "92%",
        fontFamily: "Roboto, sans-serif !important",
        zIndex: 1,
        "@media(max-width:700px)": {
            fontSize: "2.5rem",
            textAlign: "center",
            margin: "40px 0 20px 0"
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

    const [modalOpen, setModalOpen] = useState(false);
    const handleClose = () => setModalOpen(false);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "100%",
        maxWidth: 400,
        bgcolor: 'background.paper',
        borderRadius: '15px',
        border: '2px solid #03178e',
        boxShadow: 24,
        p: 4,
    };

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setModalOpen(true)
    //     }, 1000);
    //     return () => clearTimeout(timer);
    // }, []);



    return (
        <div className={classes.mainRoot}>
            <div className={classes.mainBanner}>
                <div>
                    <Modal
                        open={modalOpen}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <button onClick={handleClose} className="closeIcon"><CloseIcon/></button>
                            {/* <Typography style={{textAlign: "center"}} id="modal-modal-title" variant="h6" component="h2">
                                July 4th Hours
                            </Typography> */}
                            <br/>
                            <Typography style={{textAlign: "center"}} id="modal-modal-description" sx={{ mt: 2 }}>
                                We will be closed on 7/4 and 7/5. We will be monitoring emails.
                            </Typography>
                            <br/>
                            <Typography style={{textAlign: "center"}}>Thanks!</Typography>
                        </Box>
                    </Modal>
                </div>
                {/* <button>Send a File</button> */}
                <div className="mainButtonWrapper">
                    <Link className={classes.mainButtonLink} to="/send-file">
                        <StaticImage
                            className={classes.mainButtonImage}
                            src="../images/SendaFileButton.png"
                        />
                    </Link>
                    <Link className={classes.mainButtonLinkLarge} to="/order">
                        <StaticImage
                            className={classes.mainButtonImage}
                            src="../images/OrderQuoteButton.png"
                        />
                    </Link>
                    <a className={classes.mainButtonLink} href="https://pittsfordprint.securepayments.cardpointe.com/pay?" target="_blank">
                        <StaticImage
                            className={classes.mainButtonImage}
                            src="../images/PayOnlineButton.png"
                        />
                    </a>
                </div>

                <Typography className={classes.mainBannerText}>
                    Printing & Mailing <br />... Made Easy
                </Typography>

            </div>
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
           
                </div>

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


            <span className={classes.scrollToLocation} id="location"></span>
                <br/>
            <section>
                <div className={classes.container}>
                    <div className={classes.aboutWrapper}>
                        <div className={classes.aboutSectionWrapper}>
                            <Typography className={classes.aboutTitleHeader}>Location</Typography>
                            <Typography className={classes.addressText}>3750 Monroe Avenue, Pittsford NY 14534</Typography>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11653.557992491998!2d-77.5248863!3d43.0963288!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d1352564216f59%3A0x11b4a6fa66d4ca11!2sPittsford%20Printing!5e0!3m2!1sen!2sus!4v1701368378331!5m2!1sen!2sus" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
                                href="https://g.page/r/CRHK1Gb6prQREAI/review"
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
