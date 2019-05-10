import React, { Component } from 'react'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import EditPage from './EditPage'
import ViewPage from './ViewPage'
import './shared.css'
import { BrowserRouter as Router, Switch, Route, Link, Redirect, withRouter } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import ForgotPass from './ForgotPass';

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

  renderLoginPage = () => {
    return <LoginPage />
  }

  renderRegisterPage = () => {
    return <RegisterPage />
  }

  renderEditPage = () => {
    return <EditPage />
  }
  renderViewPage = () => {
    return <ViewPage storylist={this.state.storylist} stories={this.state.stories}/>
  }
  renderForgotPass = () => {
    return <ForgotPass />
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
            <Route exact path="/" component={this.renderLoginPage} />
            <Route exact path="/Sign-up-form" component={this.renderRegisterPage} />
            <Route exact path="/Edit-Page" component={EditPage} />
            <Route path="/View-Page" component={ViewPage} />
            <Route path="/Recover-Password" component={this.renderForgotPass} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App