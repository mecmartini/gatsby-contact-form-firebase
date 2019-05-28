import React from "react"
import { Link } from "gatsby"
import ContactForm from '../components/contactForm'

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Contact Form</h1>
    <ContactForm/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
