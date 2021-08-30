import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import LoginPage from "../pages/LoginPage";
import _404Page from "../pages/_404Page";
import PrivateRoute from "./PrivateRoute";

export const routes = [
  {
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    path: "/user",
    component: UserPage,
    auth: PrivateRoute,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    component: _404Page,
  },
];

export default function Routes(props) {
  return (
    <Router>
      <Link to="/">Home</Link>
      <Link to="/user">UserCenter</Link>
      <Link to="/login">Login</Link>

      <Switch>
        {routes.map((route_, index) =>
          route_.auth ? (
            <PrivateRoute key={route_.path + index} {...route_} />
          ) : (
            <Route key={route_.path + index} {...route_} />
          )
        )}
      </Switch>
    </Router>
  );
}
