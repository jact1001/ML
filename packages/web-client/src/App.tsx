import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {Search} from "./containers/Search/Search";
import './App.css';
import {ItemList} from "./containers/ItemList/ItemList";
import {ItemDetail} from "./containers/ItemDetail/ItemDetail";
import {Breadcrumb} from "./containers/Breadcrumb/Breadcrumb";

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
