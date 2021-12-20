import { Route, Redirect } from "react-router-dom";

function PrivateRoute({ user, component, path, exact }) {
    return user ? (
        <Route path={path} exact={exact} component={component} />
    ) : (
        <Redirect to="/" />
    );
}

export default PrivateRoute;
