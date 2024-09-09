import './App.css';
import Create from './components/create';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/home';
import Contact from './components/contact';
import axios from "axios";
import {toast} from "react-toastify";

function App() {
  return (
    <Router>
      
      <div className="App">
        <Navbar />
        
      
        <div className="content">
        <Switch>
          
          {/* <Form /> */}
        
          <Route exact path="/">
              <Home/>
          </Route>

          <Route exact path="/Create" >
            <Create />
          </Route>
              
          <Route exact path="/Contact">
            <Contact />
          </Route>
            
        </Switch>
        </div>
      
      </div>
    </Router>

  );
}

export default App;