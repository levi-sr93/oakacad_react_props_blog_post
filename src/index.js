import React from 'react'
import ReactDOM from 'react-dom';
import SingleComment from './components/SingleComment';
import user1 from './img/user-1.jpg';
import user2 from './img/user-2.jpg';
import user3 from './img/user-3.jpg';

const App = () => {
  return (
    <div className="ui comment">
      <SingleComment name="Sarah" comment="Looks good" date="Today at 5:00PM" picture={user1} />
      <SingleComment name="Alex" comment="That's nice" date="Today at 10:00PM" picture={user2}/>
      <SingleComment name="Jack" comment="Good idea" date="Yesterday at 9:00AM" picture={user3}/>
    </div>
  )
}


ReactDOM.render(<App />, document.querySelector('#root'));
