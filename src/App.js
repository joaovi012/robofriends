import React, { Component } from 'react';
import SearchBox from './SearchBox.js'
import CardList from './CardList.js';
import {robots} from './robots.js';


class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchField: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
        
    }

    render(){
        const filtredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        return (
            <div className = 'tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <CardList robots = {filtredRobots}/>
            </div>
        )
    } 
}

export default App