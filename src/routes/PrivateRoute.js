//HOC: private router : a router guard
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoute({ isLogin, component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { redirect: props.location.pathname },
            }}
          />
        )
      }
    />
  );
}
export default connect(({ user }) => ({ isLogin: user.isLogin }))(PrivateRoute);
