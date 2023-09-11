import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import ContactForm from "../components/orderForm"
import SEO from "../components/seo"
import "../components/main.css"


const OrderPage = () => (
  <Layout>
    <SEO title="Page 2" />
    <h1 class="menuHeader">Place an Order</h1>
    <ContactForm/>
  </Layout>
)

export default OrderPage
