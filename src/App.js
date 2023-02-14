import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Login from './Login/Login'
import Home from './home/Home'
import Message from './Login/message';
const App = () => {

  return (
   <Routes>
       <Route path='/' element={<Login/>}/>
       <Route path="/auth" element={<Login/>} />    
       <Route path="/home" element={<Home/>} />    
       <Route path="/auth/sms" element={<Message/>} />
    </Routes>
  )
};

export default App;