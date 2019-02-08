import React, { Component } from 'react';
// import '../components/css/FAQs.css';
import { Nav } from "./Nav";
import Footer from './Footer';
import axios from 'axios';

export class Playlist extends Component{
    constructor(props){
        super(props);
        this.playlist= null;
        if(localStorage.getItem('firstname') == null){
            this.isloggedin = false;
          }else{
            this.isloggedin = true;
          }
        this.state={
            filearray : []
        }
        this.value='';
    }

    componentWillMount(){
        let forf = "testest";
        
        let url= "http://localhost:8080/music/show/"+localStorage.getItem('firstname')+"/"+forf;
          axios
            .get(url)
            .then(result=>{
                if(result.data.errors){
                    return console.log(result.data.errors);
                }else{
                    if(result.data){
                        
                        // this.setState = { filearray : JSON.stringify(result.data)};
                        this.setState({filearray:result.data});
                        // this.value = this.state.filearray[0];
                       
                    }
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render(){
        // return this.isloggedin && this.state.filearray !==null ?
        const filearrayL = this.state.filearray;
        
        let valarray='';
        if(filearrayL.length >0){
          
            valarray = filearrayL.map(obj=>{
                return (
                    <div key={obj._id}>
                    <div className="playlistlabel"><br/>
                    <label >Here's Your Playlist</label><br/>
                        <label >{obj.filename}</label><br/>
                    <audio controls ><source src={obj.filepath} /></audio>
                    </div>
                    </div>
                )
            })
        }
        return(
            <div>
                <Nav login={this.isloggedin}/>
                
            <div className="Playlist">
            
                {valarray}
            </div>
            
            {/* <Footer/> */}
            </div>
        );
    }
}