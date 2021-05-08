import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import SEO from "../components/seo";
import Article from "../components/article/article";

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="home" />
      {data.allWpPost.edges.map(({ node }) => (
        <Article title={node.title} excerpt={node.excerpt} />
      ))}
    </Layout>
  );
};
export const pageQuery = graphql`
  query {
    allWpPost(sort: { fields: [date] }) {
      edges {
        node {
          title
          excerpt
        }
      }
    }
  }
`;
