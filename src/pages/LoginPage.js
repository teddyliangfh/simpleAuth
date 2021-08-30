import { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../action/user";

@connect(
  ({ user }) => ({
    isLogin: user.isLogin,
    loading: user.loading,
    err: user.err,
  }),
  { login }
)
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }
  componentDidMount() {
    console.log("UserPage did mount", this.props);
  }
  render() {
    const { isLogin, location, dispatch, login, loading, err } = this.props;
    // already login
    if (isLogin) {
      const { redirect = "/" } = location.state || {};
      return <Redirect to={redirect} />;
    }

    // does not login
    const { name } = this.state;
    return (
      <div>
        <h3>LoginPage</h3>
        <input
          type="text"
          name=""
          id=""
          value={name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={() => login({ name })}>
          {loading ? "loading" : "login"}
        </button>
        <p className="red">{err.msg}</p>
      </div>
    );
  }
}
export default LoginPage;
