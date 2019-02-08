import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Nav } from "./Nav";
import "../components/css/Blog.css";

export class Blog extends Component {
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
 <div className="Applogo">
 <Nav login={this.isloggedin}/>
          <div class="wrappper">
<div class="box11">
<h1>News</h1>
<h1>420k Monthly Listeners</h1>
</div> 
</div>

<div>
    <header id="abouttus" className="grid1">
      
     
    <div class="wrapperr">
 <p style={{writingMode: 'horizontal-t'}}>The Best Music blogs from thousands of top Music blogs in our index
  using search and social metrics.At Tiny Mix Tapes, we provide both up-to-date and dated news, reviews, interviews, and articles on different genres in the vast music world, including independent releases, major label releases, and even self-releases.
   </p>
</div>      
    </header>
    </div>

<div>
    <header id="aboutuss" className="grid1">
      
     
    <div class="wrapperrr">
 <p style={{writingMode: 'horizontal-t'}}>Looking to get your music out there amongst the tastemakers? Well first you need amazing music, because contacting top blogs with mediocre recordings that get thousands of submissions a month never makes an impact.
Discover the best new music on Australia’s premiere. The AU features exclusive Live Music Reviews and Photo Galleries for Sydney, Melbourne and more, plus Singles of the Day.
</p>
</div>      
    </header>
    </div>

<div>
<header id="aboutusss" className="grid1">
      
     
      <div class="wrapperrrr">
   <p style={{writingMode: 'horizontal-t'}}>We work with musicians and record labels from all over the world to showcase a variety of the freshest electronic, hip-hop, indie, and alternative music to a global following that is comprised of millions of music lovers in over 110 countries.
From city to city, from country to country, from continent to continent, It brings together all EDM lovers from all nations of this globe.
     </p>
</div>      
      </header>
      </div>
      
      <div>
<header id="aboutussss" className="grid1">
      
     
      <div class="wrapperrrrr">
   <p style={{writingMode: 'horizontal-t'}}>Hypebot posts daily content for indie musicians and record labels, including blogs about the music business, news and technology. Their posts are usually in-depth and well worth reading.
 We now distribute over 30,000 artists including Ed Sheeran, Paul McCartney and Finch. As well as digital distribution to hundreds of key stores, we provide you with the tools to succeed and build a brand behind your music.
     </p>
</div>      
      </header>
      </div>
    

  </div>
 

  );
}
}

export default withRouter(Blog);
