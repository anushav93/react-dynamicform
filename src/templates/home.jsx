import React, { Component } from "react";
import DynamicForm from "../components/dynamicform";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      
    }
  };
  componentDidMount() {
    fetch('/homedata.json')
    .then(res => res.json())
    .then(data => this.setState({ hdata: data.content.colums }))
  }

  render() {
    return (
      <div className="container">
        <h1>Test Project</h1>  
        {this.state.hdata && 
        <DynamicForm dataColumns={this.state.hdata}/>        
        }

      </div>
    );
  }
};

export default Home;