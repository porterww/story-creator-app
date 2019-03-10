import React, { Component } from 'react'
import SiteNav from './SiteNav'
import StoryList from './StoryList'
// import TinyMCE from 'react-tinymce'

class EditPage extends Component {
  state = {
    titleInProgress: '',
    authorInProgress: '',
    genreInProgress: '',
    storyInProgress: '',
    story: ''
  }

  handleTitleChange = event => {
    this.setState({
      titleInProgress: event.target.value
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
      storyInProgress: event.target.value

      //the event below is for TinyMCE when it is returned
      // storyInProgress: event.target.getContent()
    })
  }

  async componentDidMount() {
    await this.getStories()
  }
  
  getStories = async () => {
    try {
      const r = await fetch('http://localhost:2018/stories', {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      const stories = await r.json()
      console.log(stories)
      this.setState({ stories })
    } catch (error) {
      return this.setState({ error: error.message })
    }
  }
  async postData() {
    try {
      const r = await fetch('http://localhost:2018/stories', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: this.state.titleInProgress,
          author: this.state.authorInProgress,
          genre: this.state.genreInProgress,
          story: this.state.storyInProgress
        })
      })
      const stories = await r.json()
      if (stories.isJoi) {
        this.setState({ message: stories.details[0].context.label })
        console.log(stories)
      } else {
        console.log(stories)
        this.setState({ stories })
      }
    } catch (error) {
      return this.setState({ error: error.message })
    }
  }
  updateStory = async () => {
    try {
      const r = await fetch('http://localhost:2018/stories', {
        method: 'PUT',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: this.state.titleInProgress,
          author: this.state.authorInProgress,
          genre: this.state.genreInProgress,
          story: this.state.storyInProgress,
          _id: this.state.idInProgress
        })
      })
      const updatedstory = await r.json()
      if (updatedstory.isJoi) {
        this.setState({ message: updatedstory.details[0].context.label })
        console.log(updatedstory)
      } else {
        await this.getStories()
        console.log(updatedstory.title)
         this.setState({
          titleInProgress: updatedstory.title,
          authorInProgress: updatedstory.author,
          genreInProgress: updatedstory.genre,
          storyInProgress: updatedstory.story,
          idInProgress: updatedstory._id
        })
      }
    } catch (error) {
      return this.setState({ error: error.message })
    }
  }
  deleteMyStory = async (story) => {
    console.log('deleting a story', story)
    try {
      const r = await fetch(`http://localhost:2018/stories-delete/${story._id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          story: this.state._id
        })
      })
      const deleteStory = await r.json()
      if(deleteStory.isJoi) {
        this.setState({ message: deleteStory.details[0].context.label })
        console.log(deleteStory)
      } else {
        await this.getStories(story)
        console.log(deleteStory.title)
         this.setState({
            story: deleteStory._id
        })
      }
      } catch (error) {
        return this.setState({ error: error.message })
      }
  }

  saveStory = () => {
    if (this.state.idInProgress) {
      this.updateStory()
    } else {
      this.postData()
    }
    this.setState({})
  }

  renderStories = () => {
    // console.log(this.state.stories[_id])
    if (this.state.stories) {
      return this.state.stories.map((stories, i) => {
        return (
          <StoryList
            key={i}
            title={stories.title}
            selectHandler={() =>
              this.setState({
                titleInProgress: stories.title,
                authorInProgress: stories.author,
                genreInProgress: stories.genre,
                storyInProgress: stories.story,
                idInProgress: stories._id
              })
            }
            deleteHandler={()=>this.deleteMyStory(stories)}
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
              {this.state.message}
              {/* inputs need to be assigned to each 'for' attribute. Always needed for label to inputs to function properly. */}
              <div className="form">
                <label htmlFor="story-name">
                  Story Title:
                  <input
                    id="story-name"
                    type="text"
                    value={this.state.titleInProgress}
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
                  <fieldset className="fieldset-tinymce" id="storybox">
                    <legend>Story</legend>
                    <textarea
                      id="story-box"
                      onChange={this.handleStoryChange}
                      type="text"
                      value={this.state.storyInProgress}
                      placeholder="Write your story here! :)"
                    />
                    {/* <TinyMCE
                      id="story-box"
                      onChange={this.handleStoryChange}
                      content={this.state.storyInProgress}
                      config={{
                        toolbar:
                          'undo redo | bold italic | alignleft aligncenter alignright'
                      }}
                    /> */}
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
              </div>
            </section>
          </div>
        </div>
        <footer>TheGameBot Productions 2018 &copy;</footer>
      </div>
    )
  }
}

export default EditPage
