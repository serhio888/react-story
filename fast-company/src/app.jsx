import React from "react"
import Users from "./components/users"
import "bootstrap/dist/css/bootstrap.css"
import { Route, Switch, Link } from "react-router-dom"
import Main from "./components/main"
import Login from "./components/login"

const App = () => {
    return (
        <>
            <ul className="nav nav-underline ms-2 mb-2">
                <li className="nav-item">
                    <Link className="nav-link" aria-current="page" to="/">
                        Main
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">
                        Login
                    </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/users">
                        Users
                    </Link>
                </li>
            </ul>
            <Switch>
                <Route exact path="/" component={Main} />
                <Route path="/login" component={Login} />
                <Route path="/users/:userId?" component={Users} />
            </Switch>
        </>
    )
}

export default App
