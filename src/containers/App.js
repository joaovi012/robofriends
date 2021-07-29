import React, { Component } from 'react';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import CardList from '../components/CardList.js';
import ErrorBoundry from '../components/ErrorBoundry.js';
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
        const { robots, searchField } = this.state;
        const filtredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchField.toLowerCase());
        })
        
        if(!robots.length){
            return <h1>Loading...</h1>
        }else{
            return (
                <div className = 'tc'>
                    <h1 className = 'f1'>RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundry>
                            <CardList robots = {filtredRobots}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            )
        } 
    } 
}

export default App