import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import { Landing, SignIn, SignUp, Browse } from "Pages";

import "./App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" component={Landing} exact />
                    <Route path="/SignIn" component={SignIn} exact />
                    <Route path="/SignUp" component={SignUp} exact />
                    <Route path="/Browse" component={Browse} exact />
                    <Redirect to="/" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
