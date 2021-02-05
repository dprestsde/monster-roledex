import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import './components/card-list/card-list.component';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'; 

class App extends Component {
  constructor() {
    super();
    this.state = {
    'monsters': [],
    'searchField': ''
      }
    }
  handleFunc = (e) => {
     this.setState({'searchField': e.target.value})
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      return response.json()
    })
    .then(data=>{
      console.log(data);
      this.setState({'monsters': data})
    })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster=>{
     return monster.name.toLowerCase().includes(searchField.toLowerCase())
    });
    return (
      <div className="App">
        <SearchBox placeholder="Search Monsters" handleFunc={this.handleFunc} />
        <CardList monsters={filteredMonsters} />
       
      </div>
    );
  }
}


export default App;
