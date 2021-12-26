import React, {useEffect, useState, useRef} from 'react'
import './rough.css'
import { Link } from 'react-router-dom'   
import Home from './home'
import { connect, useDispatch } from 'react-redux'
import { fileUpload } from './store/mystore'

const Rough = () => {

    
        const fileInput = useRef(null);
        const[image, setImage] = useState(null);
        const[previewUrl, setPreviewUrl] = useState(""); 
        const dispatch = useDispatch();
        
    

    const handleFile = file => {
       
        setImage(file);
        setPreviewUrl(URL.createObjectURL(file));
       
        
    }

    const handleOndragOver = (event) => {
        event.preventDefault();
    }





    const handleOndrop = event => {
        //prevent the browser from opening the image
        event.preventDefault(); 
        event.stopPropagation(); 
        //let's grab the image file
        let imageFile = event.dataTransfer.files[0];
        handleFile(imageFile);
    }

    return(
        <>
         <div className="cont">
         <div 
             class="drop_zone"
             onDragOver = {handleOndragOver}
             onDrop = {handleOndrop}
             onClick = { () => fileInput.current.click()}
            > 
            <div><p class='text-center' style={{color:'grey'}}>DROP FILES HERE OR CLICK TO UPLOAD <br/>
             Drag files and folders here to upload or click here to browse image from your computer</p>
             <br/>
              <button class='btn mx-auto d-block' style={{color:'white', backgroundColor:'#4aa1f3'}}>
                  Select a photo from your computer
              </button>
              </div>
              <input 
           type="file" 
           accept='image/*' 
           ref={fileInput} hidden 
           onChange={e => handleFile(e.target.files[0])}
          />
            </div>
            { previewUrl && <div className="image">
                 <img style={{height:'100px', width:'100px'}} src={previewUrl} alt='image' /> 
                 <span> {image.name} </span>
                 </div> }
                 
         </div>
         <button class='btn' style={{backgroundColor:'#387BAA', color:'white'}} onClick={()=> dispatch(fileUpload(previewUrl)) }>Select</button>
         <Link to='/'><button class='btn bg-dark m-2' style={{color:'white'}}>Close</button></Link>
        
        </>
    )
}
export default Rough;

