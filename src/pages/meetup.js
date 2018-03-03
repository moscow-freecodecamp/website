import React from 'react'
import Link from 'gatsby-link'

import About from '../components/About'
import { Header } from 'semantic-ui-react'

class MeetupPage extends React.Component {
  render() {
    return (
      <div>
        <About />
        <Header as="h1">Meetup</Header>
      </div>
    )
  }
}

export default MeetupPage
