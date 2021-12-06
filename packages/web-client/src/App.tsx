import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Search} from "./components/Search/Search";
import './App.css';
import {ItemList} from "./components/ItemList/ItemList";
import {ItemDetail} from "./components/ItemDetail/ItemDetail";
import {Breadcrumb} from "./components/Breadcrumb/Breadcrumb";

function App() {



    return (
          <Router>
              <Search/>
              <Breadcrumb/>
              <Switch>
                  <Route exact path='/items/:id'>
                      <ItemDetail/>
                  </Route>
                  <Route exact path='/items'>
                      <ItemList/>
                  </Route>
              </Switch>
          </Router>
    );
}

export default App;
