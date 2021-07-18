import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "Components/Landing/Landing";
import SignIn from "Components/SignIn/SignIn";
import Browse from "Components/Browse/Browse";
import SignUp from "Components/SignUp/SignUp";

import "./App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/SignIn">
                        <SignIn />
                    </Route>
                    <Route path="/SignUp">
                        <SignUp />
                    </Route>
                    <Route path="/Browse">
                        <Browse />
                    </Route>
                    <Route path="/">
                        <Landing />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
