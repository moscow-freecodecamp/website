import React from 'react'
import { Grid, Image, Segment, Header, Icon } from 'semantic-ui-react'
import Link from 'gatsby-link'

import logo from './logo.png'

class About extends React.Component {
  render() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Segment basic textAlign="center">
              <Image
                centered
                size="small"
                src={logo}
                alt="FCC Moscow Logo"
                rounded
              />
              <Header as="h1">
                <Link to={'/'}>FreeCodeCamp Moscow</Link>
                <Header.Subheader>
                  Small Moscow-based community of{' '}
                  <a href="http://freecodecamp.com/">FreeCodeCamp</a>
                </Header.Subheader>
              </Header>

              <a href="https://moscow-freecodecamp.slack.com/">
                <Icon size="large" name="slack" color="orange" circular link />
              </a>

              <a href="https://www.facebook.com/groups/free.code.camp.moscow/">
                <Icon size="large" name="facebook" color="blue" circular link />
              </a>
            </Segment>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}

export default About
