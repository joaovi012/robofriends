import React, { useState, useEffect } from 'react';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import CardList from '../components/CardList.js';
import ErrorBoundry from '../components/ErrorBoundry.js';
import './App.css';


function App(){
    const [robots, setRobots] = useState([])
    const [searchField, setSearchField] = useState('')

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>response.json())
        .then(users => setRobots(users))
    }, [])

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }

    const filtredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
        
    if(!robots.length){
        return <h1>Loading...</h1>
    }else{
        return (
            <div className = 'tc'>
                <h1 className = 'f1'>RoboFriends</h1>
                <SearchBox searchChange = {onSearchChange}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots = {filtredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        )
    } 
}

export default App