import React, { Component } from 'react'
import EditPage from './EditPage'
import ViewPage from './ViewPage'
import './shared.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

library.add(faTrashAlt)

class App extends Component {
  renderEditPage = () => {
    return <EditPage />
  }
  renderViewPage = () => {
    return <ViewPage />
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
