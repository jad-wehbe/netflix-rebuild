import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PrivateRoute from "Components/PrivateRoute";

import Landing from "Pages/Landing/Landing";
import SignIn from "Pages/SignIn/SignIn";
import Browse from "Pages/Browse/Browse";
import SignUp from "Pages/SignUp/SignUp";

import "./App.css";

function App() {
  const user = useSelector((state) => state.signIn.user);
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Landing} exact />
          <Route path="/signIn" component={SignIn} exact />
          <Route path="/signUp" component={SignUp} exact />
          <PrivateRoute user={user} path="/browse" component={Browse} exact />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
