import React, { useState } from "react"
import { Link } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import Layout from "../components/layout"
import OrderForm from "../components/orderForm"
import SEO from "../components/seo"
import Radio from "@mui/material/Radio"
import RadioGroup from "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormControl from "@mui/material/FormControl"
import FormLabel from "@mui/material/FormLabel"
import "../components/main.css"

const withStyles = makeStyles(() => ({
  formRoot: {
    margin: "10px auto",
    backgroundColor: "#f7edd4",
    // border: "1px solid red"
  },
}))

const OrderPage = () => {
  const classes = withStyles()
  const [value, setValue] = useState("order")

  const handleChange = event => {
    setValue(event.target.value)
  }

  return (
    <Layout backgroundColor="#f7edd4">
      <SEO title="Orders & Quote" />
      <h1 class="menuHeader">
        {value === "order" ? "Place an Order" : "Request a Quote"}
      </h1>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "auto" }}
      >
        <FormControl className={classes.formRoot}>
          <FormLabel id="demo-controlled-radio-buttons-group">
            Select an option:
          </FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={value}
            onChange={handleChange}
            row
          >
            <FormControlLabel
              value="order"
              control={<Radio />}
              label="Place an Order"
            />
            <FormControlLabel
              value="quote"
              control={<Radio />}
              label="Request a Quote"
            />
          </RadioGroup>
        </FormControl>
      </div>

      <OrderForm
        bucket={
          value === "order"
            ? "pittsford-printing-orders"
            : "pittsford-printing-request-quote"
        }
        actionTitle={"Submit"}
        uploadRequired={false}
      />
    </Layout>
  )
}

export default OrderPage
