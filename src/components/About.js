import React from 'react'
import { Grid, Image, Segment, Header } from 'semantic-ui-react'
import Link from 'gatsby-link'

import logo from './logo.png'

class About extends React.Component {
  render() {
    return (
      
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Segment basic textAlign='center'>
                <Link to={'/'}>
                  <Image centered size='small' src={logo} alt='FCC Moscow Logo' rounded />
                </Link>
                <Header as='h1'>
                  FreeCodeCamp Moscow
                  <Header.Subheader>
                    Small Moscow-based community of <a href='http://freecodecamp.com/'>FreeCodeCamp</a>
                  </Header.Subheader>
                </Header>
                
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
    )
  }
}

export default About
