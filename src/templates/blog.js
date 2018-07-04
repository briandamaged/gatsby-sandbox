
import React from 'react';

export default function BlogTemplate({data}) {
  const {html, frontmatter} = data.markdownRemark;

  return (
    <div>
      <h1>{frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{__html: html}} >
      </div>
    </div>
  );
}


export const query = graphql `
  query BlogPosts($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`;
