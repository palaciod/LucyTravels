import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/routes/Home";
import Gallery from "./components/routes/Gallery";
import Blogs from "./components/routes/Blogs";
import About from "./components/routes/About";
import Places from "./components/routes/Places";
import Paris from "./components/routes/Paris";
import Roma from "./components/routes/Roma";
import Zurich from "./components/routes/Zurich";
import Medellín from "./components/routes/Medellín";
import NYC from "./components/routes/NYC";
import Morocco from "./components/routes/Morocco";
import PuertoRico from "./components/routes/PuertoRico";
import Portland from "./components/routes/Portland";
import Cancun from "./components/routes/Cancun";
import "../src/components/styles/Style.css";
class App extends React.Component {
  render() {
    return (
      <div className=''>
        <Router>
          <div>
            <Switch>
              <Route exact path='/' component={Home}></Route>
              <Route exact path='/gallery' component={Gallery}></Route>
              <Route exact path='/blogs' component={Blogs}></Route>
              <Route exact path='/about' component={About}></Route>
              <Route exact path='/places' component={Places}></Route>
              <Route exact path='/paris' component={Paris}></Route>
              <Route exact path='/rome' component={Roma}></Route>
              <Route exact path='/zurich' component={Zurich}></Route>
              <Route exact path='/medellín' component={Medellín}></Route>
              <Route exact path='/nyc' component={NYC}></Route>
              <Route exact path='/morocco' component={Morocco}></Route>
              <Route exact path='/puertoRico' component={PuertoRico}></Route>
              <Route exact path='/portland' component={Portland}></Route>
              <Route exact path='/cancun' component={Cancun}></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
