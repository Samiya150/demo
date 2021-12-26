import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './home';
import Upload from './upload'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import files from './store/mystore'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

const store = createStore(files)
 


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <Router>
      <Routes>
        <Route exact path= "/" element={<Home/>}></Route>
        <Route exact path= "/upload" element={<Upload/>}></Route>
     </Routes>
    </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
