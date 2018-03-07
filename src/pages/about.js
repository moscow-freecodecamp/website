import React from "react";
import Link from "gatsby-link";

import About from "../components/About";
import { Header } from "semantic-ui-react";
import get from "lodash/get";

class AboutPage extends React.Component {
  render() {
    const members = get(this, "props.data.allMember.edges");
    return (
      <div>
        <About />
        <Header as="h1">About</Header>
        Info from{" "}
        <a href="https://github.com/orgs/moscow-freecodecamp/people">
          https://github.com/orgs/moscow-freecodecamp/people
        </a>
        {members.map(member => {
          const node = member.node;
          return (
            <div>
              {node.name}
              <ul>
                <li>
                  <b>Email</b>: {node.email}
                </li>
                <li>
                  <b>Bio</b>: {node.bio}
                </li>
                <li>
                  <b>Ava</b>: {node.avatarUrl}
                </li>
                <li>
                  <b>Location</b>: {node.location}
                </li>
                <li>
                  <b>Website</b>: {node.url}
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default AboutPage;

export const membersQuery = graphql`
  query membersQuery {
    allMember {
      edges {
        node {
          name
          avatarUrl
          email
          bio
          isHireable
          location
          url
          websiteUrl
        }
      }
    }
  }
`;
