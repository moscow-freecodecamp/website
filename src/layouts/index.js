import React from 'react'
import Link from 'gatsby-link'
import { withPrefix, navigateTo } from 'gatsby-link'

import { Container, Header, Menu, Segment } from 'semantic-ui-react'

import GithubCorner from 'react-github-corner'

import '../ui/dist/semantic.css'

class Template extends React.Component {
  constructor(props) {
    super(props)
    const { location } = props
    this.state = {
      activeItem: location.pathname,
    }
  }
  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    navigateTo(name)
  }
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
        <GithubCorner href="https://github.com/moscow-freecodecamp/website" />
        <Container text>
          <Menu pointing secondary>
            <Menu.Item
              name="/"
              active={this.state.activeItem === '/'}
              onClick={this.handleItemClick}
            >
              Главная
            </Menu.Item>
            <Menu.Item
              name="/about"
              active={activeItem === '/about'}
              onClick={this.handleItemClick}
            >
              О нас
            </Menu.Item>

            <Menu.Item
              name="/meetup"
              active={activeItem === '/meetup'}
              onClick={this.handleItemClick}
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
