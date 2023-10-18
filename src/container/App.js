import React from "react";
import CardList from "../components/CardList.js";
import { robots } from "../robots.js";
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js'
import "./App.css"

class App extends React.Component {
  constructor() {
    super();
    // state is something that can change and affect the app.
    // states are usually in the parent componentt
    this.state = {
      robots: [],
      searchfield: ''
    }
  }

  componentDidMount() {
      this.setState({robots: robots});
  }

  //everytime input changes, log the event
  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value})
  }

  render() {
    const filteredRobots = this.state.robots.filter(robots => {
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
   })

    return (
      <div className='tc'>
        <h1>Friends</h1>
        {/* have to do this. on any object functions */}
        <SearchBox searchChange={this.onSearchChange}/>
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
