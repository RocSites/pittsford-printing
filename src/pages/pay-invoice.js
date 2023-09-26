import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/main.css"

const PayInvoice = () => (
  // OPTED TO DIRECT USER DIRECTLY TO PAYMENT PAGE FROM HOME/LANDING AS OPPOSED TO HAVING IT'S OWN PAGE
  <Layout>
    <SEO title="Pay Invoice" />
    <h1 class="menuHeader">Pay Invoice</h1>
    <div class="paymentPreText">
      <p class="paymentText">Please use the link below to pay your invoice</p>
      <a class="paymentLink" href="https://pittsfordprint.securepayments.cardpointe.com/pay?" target="_blank">
        <p style={{textAlign: "center", margin: "auto"}}>Pay My Invoice</p>
      </a>
      <p class="paymentText">Once you submit your payment, you will receive a confirmation email</p>
      <p class="paymentText">If you have any questions, pleas don't hesitate to give us a call! <span><a href="tel:(585) 383-0150">(585) 383-0150</a></span></p>
    </div>
  </Layout>
)

export default PayInvoice