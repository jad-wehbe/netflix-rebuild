import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
                    <Route path="/" exact component={Landing} />
                    <Route path="/SignIn" component={SignIn} />
                    <Route path="/SignUp" component={SignUp} />
                    <Route path="/Browse" component={Browse} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
