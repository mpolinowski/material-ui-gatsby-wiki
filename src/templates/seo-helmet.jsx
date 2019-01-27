import React from 'react'
import Helmet from 'react-helmet'
import PropTypes from 'prop-types'
import config from './config'

const getSchemaOrgJSONLD = ({
  isMarkdown,
  articleUrl,
  articleTitle,
  articleImage,
  articleExcerpt,
  articleAuthor,
  articleDatePublished,
}) => {
  const schemaOrgJSONLD = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      articleUrl,
      name: articleTitle,
      alternateName: config.title,
    },
  ];

  return isMarkdown
    ? [
      ...schemaOrgJSONLD,
      {
        '@context': 'http://schema.org',
        '@type': 'BlogPosting',
        articleUrl,
        name: config.applicationName,
        alternateName: config.title,
        headline: articleTitle,
        image: {
          '@type': 'ImageObject',
          url: articleImage,
        },
        articleExcerpt,
        author: {
          '@type': 'Person',
          name: articleAuthor,
        },
        publisher: {
          '@type': 'Organization',
          url: 'https://instar.com',
          logo: config.logo,
          name: 'INSTAR Deutschland GmbH',
        },
        mainEntityOfPage: {
          '@type': 'WebSite',
          '@id': config.url,
        },
        articleDatePublished,
      },
    ]
    : schemaOrgJSONLD;
};

const SEOHelmet = ({ articleTitle, articleExcerpt, articleImage, articleUrl, articleAuthor, articleDatePublished, isMarkdown }) => {
  const title = articleTitle || config.title;
  const description = articleExcerpt || config.description;
  const image = articleImage || config.image;
  const url = articleUrl || config.url;
  const datePublished = isMarkdown ? articleDatePublished : false;

  const schemaOrgJSONLD = getSchemaOrgJSONLD({
    isMarkdown,
    articleUrl,
    articleTitle,
    articleImage,
    articleExcerpt,
    articleAuthor,
    datePublished,
  });

  return (
    <Helmet defaultTitle={`INSTAR Wiki 2.0`} titleTemplate={`%s | INSTAR Wiki 2.0 | INSTAR DEUTSCHLAND - Security cameras, ip cameras, network cameras, surveillance cameras, ip cam, night vision cameras, spycams, ipcam, cloud recording, video surveillance, nvr, network video recorder, security technology...`}>

      <html lang="en" />
      <meta charSet="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" href="/favicon.ico" />

      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* Schema.org tags */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrgJSONLD)}
      </script>

      {/* OpenGraph tags */}
      <meta property="og:url" content={`https://wiki.instar.com${url}`} />
      {isMarkdown ? <meta property="og:type" content="article" /> : null}
      <meta name="og:type" content="website" />
      <meta name="og:site_name" content="INSTAR Wiki 2.0" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@INSTAR_DE" />
      <meta name="twitter:creator" content="@INSTAR_DE" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link
        rel="canonical"
        href={`https://wiki.instar.com${url}`}
      />

    </Helmet>
  );
};

SEOHelmet.propTypes = {
  isMarkdown: PropTypes.bool,
  articleImage: PropTypes.string,
};

SEOHelmet.defaultProps = {
  isMarkdown: false,
  articleImage: null,
};

export default SEOHelmet;