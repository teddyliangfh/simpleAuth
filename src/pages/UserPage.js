import { Component } from "react";
import { connect } from "react-redux";

@connect(({ user }) => ({ user }))
class UserPage extends Component {
  componentDidMount() {
    console.log("UserPage did mount", this.props);
  }
  render() {
    console.log("UserPage", this.props.user); //sy-log
    return (
      <div>
        <h3>UserPage</h3>
      </div>
    );
  }
}
export default UserPage;
