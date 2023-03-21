import './App.css';
import React from 'react';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';
import { robots } from './common/robots';

class App extends React.Component {
  state = {
    robots: robots,
    searchfield: '',
  }

  handleSearchChange = (event) => {
    this.setState({searchfield: event.target.value.toLowerCase().trim()});
  }

  render() {
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(this.state.searchfield);
    })

    return (
      <>
        <h1 className='logo'>Robofriends</h1>
        <SearchBox onSearchChange={this.handleSearchChange}/>
        <CardList robots={filteredRobots}/>
      </>
    );
  }
}

export default App;