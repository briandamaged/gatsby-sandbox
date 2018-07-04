import React from 'react'
import Link from 'gatsby-link'

const IndexPage = (props) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>

    <p>Here are some plugins</p>
    { JSON.stringify(props) }
  </div>
)

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }

    }
  }
`;

export default IndexPage
