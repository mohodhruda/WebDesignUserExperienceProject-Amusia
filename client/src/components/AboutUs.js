import React,{ Component } from "react";
import { Nav } from "./Nav";
import { withRouter } from "react-router-dom";

import abstract2 from '../images/abstract2.jpg';
import {Footer} from "./Footer";
export class AboutUs extends Component {
  constructor(props){
    super(props);
    if(localStorage.getItem('firstname') == null){
      this.isloggedin = false;
    }else{
      this.isloggedin = true;
    }
  }
  render() {
    return (
      <div className="aboutbody"> 
      <Nav login={this.isloggedin}/>        
      <div className="box" id="boximage" >  
         <img src={abstract2} className="imageblog" alt="" />        
        </div>
         <section id="section-d" className="grid">
         <div className="box" id="boxcontent">
          <h2 className="content-title">Contact Us</h2>
          <p>As the world’s largest music and audio platform, Amusia lets people discover and 
  enjoy the greatest selection of music from the most diverse creator community on earth.
  The platform has become renowned for its unique content and features, including the ability 
  to share music and connect directly with artists, as well as unearth breakthrough tracks, 
  raw demos, podcasts and more. This is made possible by an open platform that directly 
  connects creators and their fans across the globe. Music and audio creators use Amusia
  to both share and monetise their content with a global audience, as well as receive detailed 
  stats and feedback from the Amusia community.</p>
        </div>

      </section>
      {/* <Footer/>  */}
      </div>
    );
  }
}
export default  withRouter(AboutUs);
