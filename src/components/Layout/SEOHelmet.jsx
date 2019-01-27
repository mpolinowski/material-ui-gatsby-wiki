import React from 'react'
import Helmet from 'react-helmet'



export default (props) => (
  <Helmet defaultTitle={`INSTAR Wiki 2.0`} titleTemplate={`%s | INSTAR Wiki 2.0 | INSTAR Deutschland GmbH`}>
  
    <meta charSet="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="icon" href="/favicon.ico" />

    {/* General tags */}
    <title>{props.title}</title>
    <meta name="description" content={props.description} />
    <meta name="image" content={props.image} />

    {/* OpenGraph tags */}
    <meta property="og:url" content={`https://wiki.instar.com${props.location}`} />
    <meta name="og:type" content="website" />
    <meta name="og:site_name" content="INSTAR Wiki 2.0" />
    <meta property="og:title" content={props.title} />
    <meta property="og:description" content={props.description} />
    <meta property="og:image" content={props.image} />

    {/* Twitter Card tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@INSTAR_DE" />
    <meta name="twitter:creator" content="@INSTAR_DE" />
    <meta name="twitter:title" content={props.title} />
    <meta name="twitter:description" content={props.description} />
    <meta name="twitter:image" content={props.image} />

    <link
      rel="canonical"
      href={`https://wiki.instar.com${props.location}`}
    />
    <html lang="en" />
  </Helmet>
)

