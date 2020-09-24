import React from 'react'
import ReactDOM from 'react-dom';
import SingleComment from './components/SingleComment';
import UserCard from './components/UserCard';

import user1 from './img/user-1.jpg';
import user2 from './img/user-2.jpg';
import user3 from './img/user-3.jpg';

const App = () => {
  return (


    <div className="ui comment">
    <UserCard>
      <div>
        Hello My name is Sara and i live In Instanbul   
      </div>
    </UserCard>
      <UserCard name="Sarah">
        <SingleComment name="Sarah" comment="Looks good" date="Today at 5:00PM" picture={user1} />
      </UserCard>

      <UserCard name="Alex">
        <SingleComment name="Alex" comment="That's nice" date="Today at 10:00PM" picture={user2}/>
      </UserCard>
      
      <UserCard name="Jack">
        <SingleComment name="Jack" comment="Good idea" date="Yesterday at 9:00AM" picture={user3}/>
      </UserCard>
    </div>
  )
}


ReactDOM.render(<App />, document.querySelector('#root'));
