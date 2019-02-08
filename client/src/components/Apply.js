import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Nav } from "./Nav";
import "../components/css/Apply.css";

export class Apply extends Component {
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
 <div className="Applylogo">
 <Nav login={this.isloggedin}/>
          <div class="wrappper">

</div>

<div>
    <header id="abouttus" className="grid">
      
     
    <div class="wrapperr">
 <p style={{writingMode: 'horizontal-t'}}>Apply Us
   </p>
</div>      
    </header>
    </div>

  
      
     
    <div class="wrapperrr">
 <p style={{writingMode: 'horizontal-t'}}><table><tr><td><label for="fName">First Name:</label></td> 
 <td><input type="text" name="fName" id="fName" required/></td></tr>

<tr><td><label for="fName">Last Name:</label></td> 
 <td><input type="text" name="fName" id="fName" required/></td></tr>

<tr><td><label for="fName">Date Of Birth:</label></td> 
 <td><input type="date" name="date"  required/></td></tr>

<tr><td><label for="fName">Email Id:</label></td> 
 <td><input type="text" name="fName" id="fName" required/></td></tr>

 <tr><td><label for="fName">Contact</label></td> 
 <td><input type="text" name="fName" id="fName" required/></td></tr>


	<input type="submit" value="Submit"/>
  <input type="reset" value="Reset"/>
		

 </table>
</p>
</div>      


  </div>
 

  );
}
}

export default withRouter(Apply);
