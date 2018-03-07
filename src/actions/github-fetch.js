/* 
  This file can be used both in dev and prod envs
*/

require("dotenv").config();
const { ApolloClient } = require("apollo-client");
const { HttpLink } = require("apollo-link-http");
const { InMemoryCache } = require("apollo-cache-inmemory");
const gql = require("graphql-tag");
const fetch = require("node-fetch");
const generateContentDigest = require("../utils/contentDigest");

const defaultQuery = gql`
  {
    organization(login: "moscow-freecodecamp") {
      name
      members(first: 20) {
        nodes {
          name
          avatarUrl
          email
          bio
          isHireable
          location
          url
          websiteUrl
          id
        }
      }
    }
  }
`;

module.exports = function(options) {
  const ghClient = new ApolloClient({
    link: new HttpLink({
      uri: "https://api.github.com/graphql",
      fetch,
      headers: {
        authorization: `bearer ${process.env.GITHUB_ACCESS_TOKEN}`
      }
    }),
    cache: new InMemoryCache()
  });

  return new Promise((resolve, reject) => {
    ghClient
      .query({ query: options.query ? options.query : defaultQuery })
      .then(response => {
        const members = response.data.organization.members.nodes;

        if (options.createNode && options.createNodeId) {
          members.forEach(member => {
            const memberNode = {
              ...member,
              original_id: member.id,
              id: options.createNodeId(`member_${member.id}`),
              parent: null,
              children: [],
              internal: {
                type: `Member`,
                contentDigest: generateContentDigest(member)
              }
            }
            options.createNode(memberNode);
          })

          resolve();
        } else {
          resolve(response.data);
        }
      })
      .catch(reject);
  });
};
