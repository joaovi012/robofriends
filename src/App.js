import React, { Component } from 'react';
import SearchBox from './SearchBox.js';
import Scroll from './Scroll.js';
import CardList from './CardList.js';
import './App.css';


class App extends Component{
    constructor(){
        super()
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response =>response.json())
            .then(users =>this.setState({ robots: users}))
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
        
    }

    render(){
        const filtredRobots = this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        })
        if(this.state.robots.length === 0){
            return <h1>Loading...</h1>
        }else{
            return (
                <div className = 'tc'>
                    <h1 className = 'f1'>RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <CardList robots = {filtredRobots}/>
                    </Scroll>
                </div>
            )
        } 
    } 
}

export default App