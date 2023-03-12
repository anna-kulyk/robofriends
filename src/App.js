// import logo from './logo.svg';
import './App.css';
import React from 'react';
import CardList from './components/CardList/CardList';
import { robots } from './common/robots';

class App extends React.Component {
  render() {
    return (
      <>
        <h1 className='logo'>Robofriends</h1>
        <CardList robots={robots}/>
      </>
    );
  }
}

export default App;
