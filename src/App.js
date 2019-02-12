import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {robots} from './robot';
import CardList from "./CardList";
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import 'tachyons'
class App extends Component {
  constructor()
  {
    super();
    this.state={
      robots:robots,
      searchfield:''
    }
  }
  
  componentDidMount()
  {
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(json => this.setState({robots:json}))
  }
  
  
  onSearchChange=(event)=>{
    //console.log(event.target.value);
    this.setState({searchfield:event.target.value})
    
    //console.log(filteredrobot);
  }
  
  
  render() {
    const filteredrobot=this.state.robots.filter(robot=>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
      
    })
    
    if(this.state.robots.length==0)
    {
      return <h1>Loading......</h1>;
    }
    else
    {
      return (
      <div className="tc">
      <h1>RoboFriends</h1>
      <SearchBox searchChange={this.onSearchChange} />
      <Scroll>
      <CardList robots={filteredrobot} />
      </Scroll>
      </div>
    );
      
    }
    
    
  }
}

export default App;
