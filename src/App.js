// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Card from './components/Card/Card';
import { robots } from './common/robots';

class App extends React.Component {
  render() {
    return (
      <>
        <h1 className='logo'>Robofriends</h1>
        <div className='cards-wrapper'>
          <Card id={robots[0].id} name={robots[0].name} email={robots[0].email}/>
          <Card id={robots[1].id} name={robots[1].name} email={robots[1].email}/>
          <Card id={robots[2].id} name={robots[2].name} email={robots[2].email}/>
        </div>
      </>
    );
  }
}

export default App;
