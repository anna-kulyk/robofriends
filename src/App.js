import './App.css';
import React from 'react';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';

class App extends React.Component {
  state = {
    robots: [],
    searchfield: '',
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => this.setState({robots: data}));
  }

  componentWillUnmount() {
    this.setState({robots: []});
  }

  handleSearchChange = (event) => {
    this.setState({searchfield: event.target.value.toLowerCase().trim()});
  }

  render() {
    const filteredRobots = this.state.robots.filter(robot => {
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