import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/style.css';
import Help from './Components/Help';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';
import Articles from './Components/Articles';
import Single from './Components/Single';
import { BrowserRouter, Route, Routes } from "react-router-dom";


ReactDOM.render(

  <BrowserRouter>
    <Header />
    <div className="page">

      <Sidebar className="sidebar-page" />
      <Routes>


        <Route path="/" element={<Main />} />
        <Route path="/help" element={<Help />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id"  element={<Single/>}/>



      </Routes>
    </div>


  </BrowserRouter>,

  document.getElementById('root')
);
