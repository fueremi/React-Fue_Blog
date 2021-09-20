import { Navbar } from "./components";
import { Home, Create, Blogs } from "./views";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="content">
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <Blogs />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
