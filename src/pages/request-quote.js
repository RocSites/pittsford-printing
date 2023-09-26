import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import RequestQuote from "../components/requestQuote"
import "../components/main.css"


const RequestQuotePage = () => (
  <Layout backgroundColor="#f7edd4">
    <SEO title="Request a Quote" />
    <h1 class="menuHeader">Request a Quote</h1>
    <RequestQuote/>
  </Layout>
)

export default RequestQuotePage
