import React, { Component } from 'react'
import StoryList from './StoryList'

class CRUD extends Component {
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
      // console.log(stories)
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
        // console.log(stories)
      } else {
        // console.log(stories)
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
        // console.log(updatedstory)
      } else {
        await this.getStories()
        // console.log(updatedstory.title)
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
  deleteMyStory = async story => {
    console.log('deleting a story', story)
    try {
      await fetch(`http://localhost:2018/stories-delete/${story._id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          story: this.state._id
        })
      })
      await this.getStories(story)
    } catch (error) {
      return this.setState({ error: error.message })
    }
  }

  static renderStories = () => {
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
            deleteHandler={() => this.deleteMyStory(stories)}
            allowDelete={true}
          />
        )
      })
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
  render() {
    return (
      <button className="savebutton" type="submit" onClick={this.saveStory}>
        Save Story
      </button>
    )
  }
}

export {renderStories} from './CRUD'
export default CRUD
