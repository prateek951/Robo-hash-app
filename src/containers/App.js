import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
// import {robots} from '../robots';
 class App extends Component {
     constructor(){
         super();
         this.state = {
             robots : [],
             searchField : ''
         }
     }
     componentDidMount() {
         fetch('https://jsonplaceholder.typicode.com/users')
         .then(response => response.json())
         .then(users => {
            this.setState({ robots: users });            
        });
     }



     onSearchChange = e => {
       this.setState({
           searchField : e.target.value
       });
        console.log(e.target.value);
        /*Set the state*/
         
    }
   render() { 
       const {robots,searchField} = this.state;
        const filteredRobots = robots.filter(
        robot =>
            robot.name
            .toLowerCase()
            .includes(
                this.state.searchField.toLowerCase()
            )
        );
        if(robots.length === 0){
            return <h1>Loading</h1>
        }else{
             return <div className="tc">
                 <h1 className="f1">
                   RoboHash - Search For Robots :)
                 </h1>
                 <SearchBox searchChange={this.onSearchChange} />
                 <Scroll>
                   <CardList robots={filteredRobots} />
                 </Scroll>
               </div>;         
        }
   
    }
}

export default App;