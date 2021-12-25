import React, { Component } from 'react'
import plus from './assets/plus.png'
import App from './App'
import prague from './assets/prague.jpg'
import './home.css'
import Home from './home'
import Rough from './Rough'
import { Link } from 'react-router-dom'   

export default class upload extends Component {
            state = {
                isGallery: true,
                images: [
                  {img: require('./assets/prague.jpg'), id: 1},
                  {img: require('./assets/tajmahal.jpg'), id: 2},
                  {img: require('./assets/bookbg.png'), id: 3}
                ],
                border: false,
                imgid: [ ]
            }

           handleBorder =(id)=>{
               if ( document.getElementById(id).style.border.toString() == "5px solid blue"){
                document.getElementById(id).style.border= "0px solid white"
               }
                else
           ( document.getElementById(id).style.border= "5px solid blue")
           console.log(document.getElementById(id).style.border.toString()
           
           )
           
           }
    render() {

        let bor = "gallery "
         bor += this.state.border? "addBorders": "noBorders"
        
        return (
            <div class='bg-light'>
            <App/>
            <div class="container">
                <Link to='/'> <p>X</p></Link>
                
                   <div class="row" style={{marginTop:'10%', marginLeft: '15%'}}>
                       <div class="col-lg bg-white" style={{borderTopLeftRadius:'10px'}}>
                       <div style={{marginTop:'4%'}} class='container'>
                           <h4>Select Image </h4>

                           {this.state.isGallery ?  <div style={{paddingTop:'15px'}}><a class="line">Gallery</a><a onClick={()=> this.setState({isGallery: false})} style={{marginLeft:'10px', cursor: 'default'}}>Upload</a></div>: 
                            <div onClick={()=> this.setState({isGallery: true})} style={{paddingTop:'15px'}}><a>Gallery</a><a class="line" style={{marginLeft:'10px'}}>Upload</a></div>}
                            <div class='blueline'></div>
                           <div>
                            {this.state.isGallery?   
                            <div>
                                {this.state.images.map(image => <img key={image.id} id={image.id} onClick={()=>this.handleBorder(image.id)} class='gallery' src={image.img}/>)}
                            </div>
                            :<Rough/>}
                           <br/>
                           <button onClick={()=> this.MyLinkButton("/")} style={{marginTop:'5%', backgroundColor:'#387BAA', color:'white'}} type="button" class="btn">Next</button>
                           </div>
                       </div>
                       </div>
                     
                   </div>
                   </div>
         </div>
        )
    }
}
