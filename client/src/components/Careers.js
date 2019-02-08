import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Nav } from "./Nav";
import {Footer} from "./Footer";
export class Careers extends Component{
  constructor(props){
    super(props);
    if(localStorage.getItem('firstname') == null){
      this.isloggedin = false;
    }else{
      this.isloggedin = true;
    }
  }
render(){
  return(
    <div className="careerspage">
      <Nav login={this.isloggedin}/>
        {/* Main Area */}
           <header id="careerheader" className="grid">
              <div className="bg-image"></div>
                <div className="content-wrap">
                <p>JOIN THE CRAZE!</p>
              </div>
          </header>
        {/* Section B */}
        <section id="section-b" className="grid">
        
          <ul className="animate-reveal animate-first">
            <li className="gridbox" >
              <div className="card">
                <div className="card-content">
                  <h3 className="card-title">Designing Manager</h3>
                  <p>Take the responsibility of managing design or graphics teams and departments.</p>
                  <p><a href="/Apply"><button type="button" className="btn btn-primary">Apply</button></a></p>
                 </div>
              </div> 
            </li>
            <li>
              <div className="card">
                <div className="card-content"> 
                  <h3 className="card-title">Creative Strategist</h3>
                  <p> We need someone who thinks outside the box and comes up with media plans.</p>
                  <p><button type="button" className="btn btn-primary">Apply</button></p>
                 </div>
              </div> 
            </li>
            <li>
               <div className="card"> 
                 <div className="card-content"> 
                  <h3 className="card-title">Creative Strategy Lead</h3>
                  <p>Can work on marketing campaigns and managing creative service projects. </p>
                  <p><button type="button" className="btn btn-primary">Apply</button></p>
                 </div> 
               </div> 
            </li>
          </ul>

           <ul className="animate-reveal animate-first">
            <li >
               <div className="card">
                <div className="card-content"> 
                  <h3 className="card-title">Digital <br/>Marketing <br/>Manager </h3>
                  <p>Help craft lead nurturing programs and drip communications..</p>
                  <p><button type="button" className="btn btn-primary">Apply</button></p>
                 </div>
              </div> 
            </li>
            <li>
               <div className="card">
                <div className="card-content">
                  <h3 className="card-title">Ads Policy <br/> Analyst and <br/>Strategist</h3>
                  <p>Gathering feedback from sales  to define our company’s positioning.</p>
                  <p><button type="button" className="btn btn-primary">Apply</button></p>
                 </div>
              </div> 
            </li>
            <li>
              <div className="card">
                 <div className="card-content">
                  <h3 className="card-title">IT <br/>Operations <br/>Lead Associate</h3>
                  <p>Responding to day-to-day IT issues arising in the office.</p>
                  <p><button type="button" className="btn btn-primary">Apply</button></p>
                </div>
              </div>
            </li>
          </ul>
        </section>
               
      {/* <Footer/> */}
    </div>
  )
}
}



export default withRouter(Careers);