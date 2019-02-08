import React, { Component } from "react";
import axios from "axios";
import { Nav } from "./Nav";
import {Footer} from "./Footer";

axios.defaults.withCredentials = true;
export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      email: "",
      error: null,
      valerrors: null
    };
    this.isloggedin = false;
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  changeHandler(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  submitHandler(e) {
    e.preventDefault();
    if(e.target.password.value.length < 8){
      this.setState({success : false,valerrors: 'Enter password greater than 8 chars'});
    }else{
      //always match the post/get request method with routes.js post/get
    axios
    .post("http://localhost:8080/api/login", this.state)
    .then(result => {
        //switch case to check& display message recieved from server
        switch(result.data){
          case 'Invalid username' : this.setState({valerrors: 'Invalid username'});
                                    window.localStorage.clear();
                                    break;
          case 'Password does not match' : this.setState({valerrors: result.data});
                                           window.localStorage.clear();
                                           break;
          default:  localStorage.setItem("firstname",result.data.firstname);
                    this.props.history.push("/UserHome"); //route to mainpage on success
        }
      });
    }
  }

  render() {
    var login_state = this.state.success;
    return (
      <div>
      <Nav login={login_state}></Nav>
      <div className="bodylogin">
        


      <section id="section-b" className="grid">
        <ul>

          <li>
            <div className="form">
            <div className="plogin">
  {this.state.error && <p>{this.state.error}</p>}
        {this.state.valerrors}</div>
              <div className="card-content">
              <form  onSubmit={this.submitHandler} >
          {this.state.valerrors &&
            this.state.valerrors.email && (
              <p>{this.state.valerrors.email.msg}</p>
            )}
          <input
            onChange={this.changeHandler}
            type="email"
            name="email"
            id="email"
            placeholder="Email Id"
          />{" "}
          <br />
          {this.state.valerrors &&
            this.state.valerrors.password && (
              <p>{this.state.valerrors.password.msg}</p>
            )}
          <input
            onChange={this.changeHandler}
            type="password"
            name="password"
            id="password"
            placeholder="Password"
          />{" "}
          <button type="submit" id="submit" className="btn btn-xs">Submit</button>
          <p className="message">Not registered? <a href="/register">Create an account</a></p>
        </form>
              </div>
            </div>
          </li>

        </ul>
      </section>

      
      </div>
      {/* <Footer /> */}
      </div>
    );
  }
}

// export default Login;