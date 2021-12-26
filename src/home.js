import React, { Component } from 'react'
import plus from './assets/plus.png'
import './home.css'
import Nav from './Nav'
import { useNavigate, Link } from 'react-router-dom'   
import { useSelector} from 'react-redux'
export default function Home(){
        const file= useSelector(state => state.files)

        return (
         <div class="bg-light">
             <Nav/>
             <div class="container">
                    <div class="row" style={{marginTop:'10%', marginLeft: '15%'}}>
                        <div class="col-sm-6 bg-white" style={{borderTopLeftRadius:'10px'}}>
                        <div style={{marginTop:'4%'}} class='container'>
                            <h4>Setup your WorkPerk </h4>
                            <div class='lineblue' style={{paddingTop:'15px'}}>Work perks set up will only take a few minutes</div><br/>
                            <div style={{paddingTop:'15px'}}>Image</div>
                            <div class='row'>
                                {file.map(fil => <img src={fil.name} class='col' style={{width:'60px', height:'60px'}}/> )}
                               
                             {console.log(file)}
                            <Link to='/upload'>
                            <img class='bg-light col' style={{width: '45px', height:'45px', marginTop:'15px', border:'10px solid #FAF9F6'}} src={plus} alt='import'/>
                            </Link>
                            <br/>
                            <Link to='/upload'>
                            <button style={{marginTop:'25%', backgroundColor:'#387BAA', color:'white'}} class="btn text-left">Next</button>
                            </Link>
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

 