import React, { Component } from 'react'
import SiteNav from './SiteNav'
import StoryList from './StoryList'
import TinyMCE from 'react-tinymce'

class EditPage extends Component {
  state = {
    storyTitleInProgress: '',
    authorInProgress: '',
    genreInProgress: '',
    storyInProgress: ''
  }

  handleTitleChange = event => {
    this.setState({
      storyTitleInProgress: event.target.value
    })
  }

  handleAuthorChange = event => {
    this.setState({
      authorInProgress: event.target.value
    })
  }

  handleGenreChange = event => {
    this.setState({
      genreInProgress: event.target.value
    })
  }

  handleStoryChange = event => {
    this.setState({
      storyInProgress: event.target.getContent()
    })
  }

  componentDidMount() {
    fetch('http://localhost:2018/stories', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(stories => {
        this.setState({ stories })
      })
      .catch(error => {
        return this.setState({ errormessage: error.message })
      })
  }

  postData = () => {
    fetch('http://localhost:2018/stories', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.storyTitleInProgress,
        author: this.state.authorInProgress,
        genre: this.state.genreInProgress,
        story: this.state.storyInProgress
      })
    })
      .then(response => response.json())
      .then(stories => {
        
        console.log(stories)
        this.setState({
          stories,
          storyTitleInProgress: '',
          authorInProgress: '',
          genreInProgress: '',
          storyInProgress: ''
        })

      })
      .catch(error => {
        return this.setState({ errormessage: error.message })
      })
  }

  saveStory = e => {
    // e.preventDefault()
    // this.props.saveTVShow({
    //   title: this.state.storyTitleInProgress,
    //   author: this.state.authorInProgress,
    //   genre: this.genreInProgress,
    //   story: this.storyInProgress
    this.postData()
  }

  renderStories = () => {
    if (this.state.stories) {
      return this.state.stories.map((data, i) => {
        return (
          <StoryList
            key={i}
            title={data.title}
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
            <div className="button-listing">{this.renderStories()}</div>
          </section>
          <div className="rightBlock">
            <SiteNav />
            <section className="editor">
              <h2>Create/Edit Your Story</h2>
              {/* inputs need to be assigned to each 'for' attribute. Always needed for label to inputs to function properly. */}
              <form className="form">
                <label htmlFor="story-name">
                  Story Title:
                  <input
                    id="story-name"
                    type="text"
                    value={this.state.storyTitleInProgress}
                    onChange={this.handleTitleChange}
                  />
                </label>
                <label htmlFor="author">
                  Author:
                  <input
                    id="author"
                    type="text"
                    value={this.state.authorInProgress}
                    onChange={this.handleAuthorChange}
                  />
                </label>
                <label htmlFor="genre">
                  Genre:
                  <input
                    id="genre"
                    type="text"
                    value={this.state.genreInProgress}
                    onChange={this.handleGenreChange}
                  />
                </label>
                <label htmlFor="story-box">
                  <fieldset>
                    <legend>Story</legend>
                    <TinyMCE
                      id="story-box"
                      onChange={this.handleStoryChange}
                      content=""
                      config={{
                        toolbar:
                          'undo redo | bold italic | alignleft aligncenter alignright'
                      }}
                    />
                  </fieldset>
                </label>
                <div className="savestorybutton">
                  <button
                    className="savebutton"
                    type="submit"
                    onClick={this.saveStory}
                  >
                    Save Story
                  </button>
                </div>
              </form>
            </section>
          </div>
        </div>
        <footer>TheGameBot Productions 2018 &copy;</footer>
      </div>
    )
  }
}

export default EditPage
