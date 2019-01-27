import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet';
import { withStyles } from '@material-ui/core/styles'

import SEOHelmet from "./seo-helmet"

require('../assets/styles/prism-coy.css')

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20,
  },
});

function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return [
    <Helmet><title>{frontmatter.title}</title></Helmet>,
    <SEOHelmet
      articleImage={frontmatter.social}
      articleTitle={frontmatter.title}
      articleExcerpt={frontmatter.excerpt}
      articleAuthor={frontmatter.author}
      articleUrl={frontmatter.path}
      articleDatePublished={frontmatter.date}
      isMarkdown
    />,
    <React.Fragment>
      <div className="container">
        <div className="article">
          <h1>{frontmatter.title}</h1>
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </React.Fragment>
  ];
}

export default withStyles(styles)(Template)

export const pageQuery = graphql`
  query ArticlesByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        excerpt
        author
        social
        image {
          childImageSharp {
              resize(width: 597, height: 382){
                src
                }
          }
        },
      }
    }
  }
`;
