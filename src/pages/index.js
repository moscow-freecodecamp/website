import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import { Grid, Segment, Button, Header, Icon } from 'semantic-ui-react'

import About from '../components/About'
import Layout from '../layouts/index'

import favicon from '../../static/favicon.ico'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div>
        <Helmet>
          <title>{siteTitle}</title>
          <link rel="shortcut icon" type="image/x-icon" href={favicon} />
        </Helmet>
        <About />
        <Grid>
          {posts.map(({ node }) => {
            const title = get(node, 'frontmatter.title') || node.fields.slug
            return (
              <Grid.Row key={node.fields.slug}>
                <Grid.Column>
                  <Segment>
                    <Header as="h3">
                      <Link to={node.fields.slug}>{title}</Link>
                      <Header.Subheader>
                        <Icon name="calendar" />
                        {node.frontmatter.date}
                      </Header.Subheader>
                    </Header>
                    <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                    <Grid textAlign="right">
                      <Grid.Column>
                        <Link to={node.fields.slug}>
                          <Button>Читать далее</Button>
                        </Link>
                      </Grid.Column>
                    </Grid>
                  </Segment>
                </Grid.Column>
              </Grid.Row>
            )
          })}
        </Grid>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt(pruneLength: 500)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
