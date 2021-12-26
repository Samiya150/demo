import React, { Component } from 'react'
import { fileUpload, files } from './store/mystore'
import Nav from './Nav'
import prague from './assets/prague.jpg'
import './home.css'
import Home from './home'
import Rough from './Rough'
import { Link } from 'react-router-dom'   
import { useDispatch, useSelector, connect } from 'react-redux'


class upload extends Component {
    
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

           

           handleBorder =(id, img)=>{
            
               if ( document.getElementById(id).style.border.toString() == "5px solid blue"){
                document.getElementById(id).style.border= "0px solid white"
               }
                else
           ( document.getElementById(id).style.border= "5px solid blue")
           console.log(document.getElementById(id).style.border.toString(),
           
           )
           
           }
    render() {

        let bor = "gallery "
         bor += this.state.border? "addBorders": "noBorders"
        
        return (
            <div class='bg-light'>
            <Nav/>
            <div class="container">
               
                
                   <div class="row" style={{marginTop:'10%', marginLeft: '10%'}}>
                       <div class="col-lg bg-white" style={{borderTopLeftRadius:'10px'}}>
                       <div style={{marginTop:'4%'}} class='container'>
                            <Link to='/'> <div class='bg-dark btn' style={{color:'white'}}>X</div></Link>
                           <h4>Select Image </h4>

                           {this.state.isGallery ?  <div style={{paddingTop:'15px'}}><a class="line">Gallery</a><a onClick={()=> this.setState({isGallery: false})} style={{marginLeft:'10px', cursor: 'default'}}>Upload</a></div>: 
                            <div onClick={()=> this.setState({isGallery: true})} style={{paddingTop:'15px'}}><a>Gallery</a><a class="line" style={{marginLeft:'10px'}}>Upload</a></div>}
                            <div class='blueline greyline'></div>
                           <div>
                            {this.state.isGallery?   
                            <div>
                                {this.state.images.map(image => <img key={image.id} id={image.id} onClick={()=>this.handleBorder(image.id, image.img)|| this.props.fileUpload(image.img)} class='gallery' src={image.img}/>)}
                            </div>
                            :<Rough/>}
                           <br/>

                           {this.state.isGallery?
                           <Link to='/'>
                           <button class='btn text-right' style={{marginTop:'5%', backgroundColor:'#387BAA', color:'white'}} type="button">Select</button>
                           </Link>
                           : <div></div>}
                           </div>
                       </div>
                       </div>
                     
                   </div>
                   </div>
         </div>
        )
    }
}

const mapDispatchToProps = {
    fileUpload
   };

export default connect(null, mapDispatchToProps)(upload);