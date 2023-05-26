import NavBar from "./../components/navbar";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./../components/home";
import Login from "./../components/login";
import Posts from "./../components/posts";
import Dashboard from "./../components/dashboard";
import NotFound from "./../components/notfound";
function App() {
  return (
    <div>
      <NavBar />
      <h1>App</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/posts/:postId?" component={Posts} />
        <Route path="/404" component={NotFound} />
        <Redirect from="/article" to="/login" />
        <Redirect to="/404" />
      </Switch>
    </div>
  );
}

export default App;
