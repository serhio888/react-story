import NavBar from "./../components/navbar";
import { Route, Switch } from "react-router-dom";
import Home from "./../components/home";
import Login from "./../components/login";
import Posts from "./../components/posts";
import Dashboard from "./../components/dashboard";
import Post from "../components/post";
import PostsList from "./../components/postsList";

const posts = [
  { id: 1, label: "post 1" },
  { id: 2, label: "post 2" },
  { id: 3, label: "post 3" },
];

function App() {
  return (
    <div>
      <NavBar />
      <h1>App</h1>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route
          path="/posts/:postId"
          render={(props) => <Post {...props} posts={posts} />}
        />
        <Route
          path="/posts"
          render={(props) => <PostsList {...props} posts={posts} />}
        />
      </Switch>
    </div>
  );
}

export default App;
