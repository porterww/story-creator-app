import React, { Component } from 'react'
import SiteNav from './SiteNav'
// import StoryList from './StoryList'

class ViewPage extends Component {
    render() {
        return (
            <div className="body">
            <header>
                    <SiteNav/>
                </header>
                <div className="listings">
                    <section id="story-listing">
                        <div className="story-listing-header">
                            <h1>Stories</h1>
                        </div>
        {/*this will be a render for the story buttons when data is saved */}
                    </section>
                    <section className="viewer">
        <h2>[Story Name]{/*this will be the returned value of the story selected data*/}</h2>
                    </section>
                </div>
            </div>
        )
    }
}

export default ViewPage