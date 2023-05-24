import NavBar from "./../components/navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./../components/home";
import Login from "./../components/login";
import Posts from "./../components/posts";
import Dashboard from "./../components/dashboard";

function App() {
  return (
    <div>
      <NavBar />
      <h1>App</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/posts" component={Posts} />
      </Switch>
    </div>
  );
}

export default App;
