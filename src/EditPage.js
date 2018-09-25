import React, { Component } from 'react'
import SiteNav from './SiteNav'
// import StoryList from './StoryList'

class EditPage extends Component {
  render() {
    return (
      <div className="main-body">
        <header>
          <SiteNav />
        </header>
        <div className="listings">
          <section id="story-listing">
            <div className="story-listing-header">
              <h1>Stories</h1>
            </div>
            {/*this will be a render for the story buttons when data is saved */}
          </section>
          <section className="editor">
            <h2>Create/Edit Your Story</h2>
            {/* inputs need to be assigned to each 'for' attribute. Always needed for label to inputs to function properly. */}
            <form>
              <label htmlFor="story-name">
                Story Name:
                <input
                  id="story-name"
                  type="text"
                  /*We will add a value here later for handles and name changes*/
                />
              </label>
              <label htmlFor="author">
                Author:
                <input
                  id="author"
                  type="text"
                  /*We will add a value here later for handles and name changes*/
                />
              </label>
              <label htmlFor="genre">
                Genre:
                <input
                  id="genre"
                  type="text"
                  /*We will add a value here later for handles and name changes*/
                />
              </label>

              <label htmlFor="story-box">
                <fieldset>
                  <legend>Story</legend>
                  <input
                    id="story-box"
                    type="text"
                    /*We will add a value here later for handles and name changes*/
                  />
                </fieldset>
              </label>
            </form>
          </section>
        </div>
      </div>
    )
  }
}

export default EditPage
