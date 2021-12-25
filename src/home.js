import React, { Component } from 'react'
import plus from './assets/plus.png'
import './home.css'
import App from './App'
import { useNavigate, Link } from 'react-router-dom'   

export default class home extends Component {

     MyLinkButton = (path) => {
        return useNavigate(path)
    }
    render() {
        return (
         <div class="bg-light">
             <App/>
             <div class="container">
                    <div class="row" style={{marginTop:'10%', marginLeft: '15%'}}>
                        <div class="col-sm-6 bg-white" style={{borderTopLeftRadius:'10px'}}>
                        <div style={{marginTop:'4%'}} class='container'>
                            <h4>Setup your WorkPerk </h4>
                            <div class='lineblue' style={{paddingTop:'15px'}}>Work perks set up will only take a few minutes</div><br/>
                            <div style={{paddingTop:'15px'}}>Image</div>
                            <div>
                            <Link to='/upload'>
                            <img class='bg-light' style={{width: '45px', height:'45px', marginTop:'15px', border:'10px solid #FAF9F6'}} src={plus} alt='import'/>
                            </Link>
                            <br/>
                            <button onClick={()=> this.MyLinkButton("/")} style={{marginTop:'25%', backgroundColor:'#387BAA', color:'white'}} type="button" class="btn">Next</button>
                            </div>
                        </div>
                        </div>
                        <div style={{borderTopRightRadius:'10px', backgroundColor: '#387BAA'}} class="col-3">
                        
                        </div>
                    </div>
                    </div>
          </div>
        )
    }
}
 