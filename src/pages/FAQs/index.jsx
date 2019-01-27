import React from 'react'
import Link from 'gatsby-link'
import BreadCrumbs from '../../components/Layout/breadcrumbs/breadcrumbs'

import SEOHelmet from '../../components/Layout/SEOHelmet'
import Footer from "../../components/Layout/footer"

const seodata = {
  title: 'Frequently Asked Questions',
  description: 'Frequently Asked Questions for INSTAR IP Cameras.',
  image: '/images/Search/FAQ_SearchThumb.png'
}

export default (props) => (
  <React.Fragment>
    <SEOHelmet title={seodata.title} description={seodata.description} image={seodata.image} location={props.location.pathname} />

        <BreadCrumbs
          pills={
            [
              {
                pill: "Home",
                link: "/"
              },
              {
                pill: "Products",
                link: "/Products/"
              },
              {
                pill: "FAQs",
                link: "/FAQs/"
              }
            ]
          } />

        <h1>Frequently Asked Questions:</h1>
        <ul>
          <li><Link to="/FAQs/IN-9020FHD/">IN-9020 Full HD</Link></li>
          <li><Link to="/FAQs/IN-9008FHD/">IN-9008 Full HD</Link></li>
          <li><Link to="/FAQs/IN-8015FHD/">IN-8015 Full HD</Link></li>
          <li><Link to="/FAQs/IN-7011HD/">IN-7011 HD</Link></li>
          <li><Link to="/FAQs/IN-6014HD/">IN-6014 HD</Link></li>
          <li><Link to="/FAQs/IN-6012HD/">IN-6012 HD</Link></li>
          <li><Link to="/FAQs/IN-6001HD/">IN-6001 HD</Link></li>
          <li><Link to="/FAQs/IN-5907HD/">IN-5907 HD</Link></li >
          <li><Link to="/FAQs/IN-5905HD/">IN-5905 HD</Link></li >
          <li><Link to="/FAQs/VGA_Series/">IN-7011 HD</Link></li >
        </ul>
        <br />
        <br />
        <Footer
          previousTitle="Indoor Cameras"
          previousLink="/Indoor_Cameras/"
          nextTitle="Outdoor Cameras"
          nextLink="/Outdoor_Cameras/" />
      </React.Fragment>
    )