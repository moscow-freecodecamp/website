import React from 'react'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import get from 'lodash/get'

import About from '../components/About'

import { Button, Icon, Segment } from 'semantic-ui-react'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const { previous, next } = this.props.pathContext

    return (
      <div>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <h1>{post.frontmatter.title}</h1>
        <p>
          {post.frontmatter.date}
        </p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <Segment secondary>
          <About />
        </Segment>

          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              <Button icon labelPosition='left' basic>
                <Icon name='chevron left' /> {previous.frontmatter.title}
              </Button>
            </Link>
          )}

          {next && (
              <Link to={next.fields.slug} rel="next">
                <Button floated='right' labelPosition='right' icon basic>
                  {next.frontmatter.title} <Icon name='chevron right' /> 
                </Button>
              </Link>
          )}

      </div>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`