import React from 'react'
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom'

const App = () => {
  return (
    <div className="ui comment">
      <div className="comment">
        <a href="/" className='avatar'>
          <img alt="Profile Picture"></img>
        </a>
        <div className="content">
          <a href="/" className="author">
            Sara
          </a>
          <div className="metadata">
            <span className="date">
              Today at 5:00PM
            </span>
          </div>
          <div className="text">
            it's amazing
          </div>
        </div>
      </div>
    </div>
  )
}


ReactDOM.render(<App />, document.querySelector('#root'))
