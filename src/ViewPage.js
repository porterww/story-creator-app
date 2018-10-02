import React, { Component } from 'react'
import SiteNav from './SiteNav'
import StoryList from './StoryList'

class ViewPage extends Component {

  state = {
    storyTitleInProgress: '',
    authorInProgress: '',
    genreInProgress: '',
    storyInProgress: ''
  }

  renderStories = () => {
    if (this.state.stories) {
      return this.state.stories.map((stories, i) => {
        return (
          <StoryList key={i} title={stories.storyTitleInProgress}
           selectHandler={this.storySelected}
           deleteHandler={this.storyDeleted}
           allowDelete={true}
           />
        )
      })
    }
  }

  render() {
    return (
      <div className="main-body">
        <div className="listings">
          <section id="story-listing">
            <div className="story-listing-header">
              <h1>Stories</h1>
            </div>
            {this.renderStories()}
          </section>
          <div className="rightBlock">
            <SiteNav />
            <section className="viewer">
              <h2>
                [Story Name]
                {/*this will be the returned value of the story selected data*/}
              </h2>
            </section>
          </div>
        </div>
      </div>
    )
  }
}

export default ViewPage
