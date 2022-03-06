import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import Landing from "Pages/Landing/Landing";
import SignIn from "Pages/SignIn/SignIn";
import Browse from "Pages/Browse/Browse";
import SignUp from "Pages/SignUp/SignUp";

import "./App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" component={Landing} exact />
                    <Route path="/signIn" component={SignIn} exact />
                    <Route path="/signUp" component={SignUp} exact />
                    <Route path="/browse" component={Browse} exact />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
