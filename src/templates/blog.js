
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
  query BlogPosts($id: String!) {
    markdownRemark(id: {eq: $id}) {
      html
      frontmatter {
        date
        path
        title
      }
    }
  }
`;
