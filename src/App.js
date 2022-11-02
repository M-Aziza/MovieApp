import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './views/Home';
import Movies from './views/Movies'
import Music from './views/Music'
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Details from './views/Details';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>
        <Route exact path="/">
        <Home/>
        </Route>
        <Route exact path="/Movies">
        <Movies/>
        </Route>
        <Route exact path="/Music">
        <Music/>
        </Route>
        <Route path="/details/:id">
          <Details />
        </Route>
        {/* <Route path="music">
          <Music />
        </Route> */}
      </Switch>
    </div>
    </BrowserRouter>

  );
}

export default App;
