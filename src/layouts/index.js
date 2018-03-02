import React from 'react'
import Link from 'gatsby-link'

import { Container, Header, Menu, Segment } from 'semantic-ui-react'

import '../ui/dist/semantic.css'

class Template extends React.Component {
  state = {
    activeItem: 'main'
  }
  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  render() {
    const { location, children } = this.props
    const { activeItem } = this.state
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }
    
    return (
      <div>
        <Container text>
          <Menu pointing secondary>
            <Link to='/'>
              <Menu.Item
                name='main'
                active={this.state.activeItem === 'main'}
                onClick={this.handleItemClick}
              >
                Главная
              </Menu.Item>
            </Link>
            <Menu.Item
              name='about'
              active={activeItem === 'reviews'}
              onClick={this.handleItemClick}
              disabled
            >
              О нас
            </Menu.Item>

            <Menu.Item
              name='meetups'
              active={activeItem === 'meetups'}
              onClick={this.handleItemClick}
              disabled
            >
              Митапы
            </Menu.Item>
          </Menu>
          {children()}
        </Container>
      </div>
    )
  }
}

export default Template
