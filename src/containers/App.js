import React, { useState, useEffect}  from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
import SearchBox from '../components/SearchBox';
// import {Robots} from './Robots';
import './App.css';

//import { render } from '@testing-library/react';

// import { render } from '@testing-library/react';

const App = () =>  {
    const [Robots, setRobots] = useState([]);
    const [search, setSearch] = useState('');
  
    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setRobots(users));
    }, []);
   
    const onSearchChange = (event) => {
      setSearch(event.target.value);
    };
  
    //change robots according to search field
    const filteredRobots = Robots.filter((Robots) => {
        return Robots.name.toLowerCase().includes(search.toLowerCase());
    });

    return !Robots.length ? (
        <h1> Loading</h1>
    ) : (
        <div className="tc">
            <h1 className="f1"> Robofriends</h1>
            <SearchBox SearchChange ={onSearchChange} />
            <Scroll>
                <CardList Robots = {filteredRobots} />
            </Scroll>
            
        </div>
    );
}
  

export default App;
