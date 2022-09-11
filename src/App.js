import React, { Component } from 'react';
import Navbar from './Component/Navbar';
import News from './Component/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



class App extends Component {
  render() {
    return (
      <div>
            <Router>
                  <Navbar/>
                  <Switch>
                      <Route exact path="/Home"><News key="1"   pageSize={6}  country = "in"  category = "general"/></Route>
                      <Route exact path="/Business"><News key="2"  pageSize={6}  country = "in"  category = "buisness"/></Route>
                      <Route exact path="/Entertainment"><News key="entertainement"  pageSize={6}  country = "in"  category = "entertainement"/></Route>
                      <Route exact path="/Health"><News key="health" pageSize={6}  country = "in"  category = "health"/></Route>
                      <Route exact path="/Science"><News key="science" pageSize={6}  country = "in"  category = "science"/></Route>
                      <Route path="/Sports"><News key="sports" pageSize={6}  country = "in"  category = "sports"/></Route>
                      <Route exact path="/Technology"><News key="technology" pageSize={6}  country = "in"  category = "technology"/></Route>
                  </Switch>
            </Router>
      </div>
    );
  }
}

export default App;

