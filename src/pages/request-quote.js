import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import grillMenu from "../images/grill_menu.jpeg"
import RequestQuote from "../components/requestQuote"
import "../components/main.css"


const RequestQuotePage = () => (
  <Layout>
    <SEO title="Request a Quote" />
    <h1 class="menuHeader">Request a Quote</h1>
    <RequestQuote/>
  </Layout>
)

export default RequestQuotePage
