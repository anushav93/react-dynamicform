import React, { Component } from 'react';
import './App.scss';
import DynamicForm from "./components/dynamicform";
import { Route, Switch} from "react-router-dom";

class App extends Component {
  constructor() {
    super();
    this.state = {
    
    }
  };
  componentDidMount() {

    fetch('/homedata.json').then(res=>res.json()).then(data =>{this.setState({jsondata:data,todos: data.content.data}); })
  }
  render() {
    let dj;
    if(this.state.jsondata)
    {
    dj = this.state.jsondata.content;
    }
    return (
      <React.Fragment>
        <Switch>
            
            {dj && 
            <Route exact path="/home" render={(props) => <DynamicForm {...props} d={dj} />}></Route>
            }
            {dj && 
            <Route exact path="/home/:formid" render={(props) => <DynamicForm {...props} d={dj} />}></Route>
            }
            
          </Switch>
      </React.Fragment>
    );
  }
}

export default App;