import React from "react";
import Welcome from "./Welcome";

export default class UserLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Santosh",
      password: 12345,
      userNameEntered: "",
      passwordEntered: "",
      isloginValid: false,
      invalidFlag:''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.type === "text" ? event.target.value : event.target.value;
    if (name == "userNameEntered")
      this.setState({ userNameEntered: value });
    if (name == "passwordEntered")
      this.setState({ passwordEntered: value });
  }
  handleClick(event) {
    event.preventDefault();
    const nameDefault = this.state.username;
    const pwdDefault = this.state.password;
    const nameEntered = this.state.userNameEntered;
    const pwdEntered = this.state.passwordEntered
    if ((nameDefault == nameEntered) && (pwdDefault == pwdEntered)) {
      this.setState({ isloginValid: true });  
      this.props.history.push("/searchOptions")    
    }else{
      const invalid = "Invalid User login"
      this.setState({invalidFlag:invalid})
    }
  }
  render() {
    return (
      <div className="userLogin">
        <div className="mainDiv">
          <div className="col-md-12">
            <label>User name : </label>
            <input type="text" name="userNameEntered" className="marginUsername" onChange={this.handleChange} />
          </div>
          <div className="col-md-12 marginTop">
            <label>Password : </label>
            <input type="password" name="passwordEntered" className="marginPwd" onChange={this.handleChange} />
          </div>
          <div className="alignItem marginTop">
            <button type="button" onClick={this.handleClick}>Login</button>
          </div>
          <h3 className="loginInvalid">{this.state.invalidFlag}</h3>
        </div>        
      </div>
    );
  }
}