import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SiteNav extends Component {
  render() {
    return (
      <nav>
        <Link to="/">Editor</Link>
        <div className="header-split" />
        <Link to="/ViewPage">Viewer</Link>
      </nav>
    )
  }
}

export default SiteNav
