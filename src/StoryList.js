import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class StoryList extends Component {
  static propTypes = {
    name: PropTypes.string,
    allowDelete: PropTypes.bool,
    selectHandler: PropTypes.func,
    deleteHandler: PropTypes.func
  }

  renderDelete() {
    if (this.props.allowDelete === true) {
      return (
        <FontAwesomeIcon
          icon="trash-alt"
          className="deletebutton"
          onClick={this.props.deleteHandler}
        />
      )
    }
  }

  renderButtons() {
    if (this.props.title) {
      return (
        <div>
          <button className="storybutton" onClick={this.props.selectHandler}>
            {this.props.title}
          </button>
          {this.renderDelete()}
        </div>
      )
    }
  }

  render() {
    return <div className="story-buttons">{this.renderButtons()}</div>
  }
}

export default StoryList
