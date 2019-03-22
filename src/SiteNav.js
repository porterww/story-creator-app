import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import EditPage from './EditPage'
import ViewPage from './ViewPage'

class SiteNav extends Component {

  renderEditor = () => {
    return <EditPage />
  }
  renderViewer = () => {
    return <ViewPage />
  }

  render() {
    return (
      <nav className="storyNav">
        <Link to="/Edit-Page" component={this.renderEditor}>
          Editor
        </Link>
        <div className="header-split" />
        <Link to="/View-Page" component={this.renderViewer}>
          Viewer
        </Link>
      </nav>
    )
  }
}

export default SiteNav
