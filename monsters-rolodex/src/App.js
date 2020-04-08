import React, {Component} from 'react';
import './App.scss';

import {CardList} from './components/card-list/card-list.component';
import {Search} from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
    }
  }

//   async componentDidMount() {
//     try {
//       const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
//       response.json().then(data => this.setState({ monsters: data }));
//       ;
//     } catch (error) {
//       console.log(error);
//     }
// }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users').then((res)=> res.json().then(data => this.setState({monsters: data})));
  }

  handleEvent = e => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => {
        return monster.name.toLowerCase().includes(searchField.toLowerCase());
    })
    return(
      <div className="App">
        <h2>Monsters Market</h2>
        <Search placeholder='Search' handleEvent={this.handleEvent}/>
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  };
}

export default App;
