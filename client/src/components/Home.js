import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Nav } from "./Nav";
import '../components/css/Home.css';
import '../components/css/Home1.css';
import {Footer} from "./Footer";

export class Home extends Component{
  constructor(props){
    super(props);
    localStorage.clear();
    if(localStorage.getItem('firstname') == null){
      this.isloggedin = false;
    }else{
      this.isloggedin = true;
    }
  }

  render(){
    return(
      <div className="body3">

      <Nav login={this.isloggedin}/>
      {/* <header id="userhome" className="grid">
              <div className="bg-image" />
              <div className="content-wrap">
                <h1 className="animate-reveal animate-first">Welcome to Amusia</h1>
                <h5> <strong>Upload, Play, Repeat</strong></h5> </div>
            </header> */}
        <div id="slide1">
          <div className="content">
            <h1 className="h1">AMUSIA</h1>
            <h5> Upload, Play, Repeat</h5>
          </div>
        </div>
        <div id="slide2">
          <div className="content">
            <div className="quotes_container">
              <h5 className="quotes">"It's my life and it's now or never!Cause I ain't gonna live forever,I just want live while I'm alive
              It's my life!"<br/> - Bon Jovi "It's My Life" </h5>
              <img src align="left" alt=""/>
            </div>
          </div>
        </div>
        <div id="slide3">
          <div className="content">
            <div className="quotes_container">
              <img src align="left" alt=""/>
            </div>
          </div>
        </div> 
         <div id="slide4">
          <div className="content">
            <div className="quotes_container">
              <h5 className="quotes">"I won't be afraid just as long as you stand, stand by me." - Ben E. King "Stand By Me"</h5>
              <img  align="left" alt=""/> 
            </div>
          </div>
        </div> 
         <div id="slide5">
          <div className="content">
            <div className="quotes_container">
              <img src align="left" alt=""/> 
            </div>
          </div>
        </div>  
      </div>

     
      
    )
  }
}
export default withRouter(Home);

