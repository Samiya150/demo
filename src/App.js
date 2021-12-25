import React, { Component } from 'react'
import logo from './assets/workfam.png'
import bell from './assets/bell.png'
import comment from './assets/comment.png'


export default class App extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-light bg-white">
          <div class="container">
            <a class="navbar-brand">
              <img src={logo} alt="" width="66" height="45"/>
            </a>
            <a class="justify-content-end">
              <img src={comment} alt="" width="20" height="20"/>
              <img style={{marginLeft: '40px'}} src={bell} alt="" width="20" height="20"/>
            </a>
           
          </div>
        </nav>
      </div>
    )
  }
}




