import React, { Component } from 'react'
import EditPage from './EditPage'
import ViewPage from './ViewPage'
import './shared.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faTrashAlt)

class App extends Component {

  state = {
    storylist: {
      title: '',
      author: '',
      genre: '',
      story: ''
    },
    stories: []
  }

  renderEditPage = () => {
    return <EditPage />
  }
  renderViewPage = () => {
    return <ViewPage storylist={this.state.storylist} stories={this.state.stories}/>
  }

  storyDeleted = () => {
    this.setState({
      storylist: {
        name: ''
      }
    })
  }
  saveStory = storiesToSave => {
    console.log(storiesToSave)
    this.setState(prevState => ({
      stories: [
        ...prevState.stories,
        {
          title: storiesToSave.title,
          author: storiesToSave.author,
          genre: storiesToSave.genre,
          story: storiesToSave.story
        }
      ]
    }))
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={this.renderEditPage} />
            <Route path="/ViewPage" component={this.renderViewPage} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App
