import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "Components/Landing/Landing";
import SignIn from "Components/SignIn/SignIn";
import "./App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/signIn">
                        <SignIn />
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
