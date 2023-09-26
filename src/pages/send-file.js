import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SendFile from "../components/sendFile"
import "../components/main.css"


const SendFilePage = () => (
  <Layout backgroundColor="#f7edd4">
    <SEO title="Send File" />
    <h1 class="menuHeader">Send File</h1>
    <SendFile/>
  </Layout>
)

export default SendFilePage