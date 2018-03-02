import React from 'react'
import Link from 'gatsby-link'

import { Container, Header, Menu, Segment } from 'semantic-ui-react'

import '../ui/dist/semantic.css'

class Template extends React.Component {
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    const menu = [
      { key: 'main', active: true, name: 'Главная' },
      { key: 'about', name: 'О нас' },
      { key: 'meetups', name: 'Митапы' }
    ]
    
    return (
      <div>
        <Container text>
          <Menu pointing secondary items={menu} />
          {children()}
        </Container>
      </div>
    )
  }
}

export default Template
