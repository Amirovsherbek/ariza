import React from 'react';
import { Route,Routes } from 'react-router-dom';
import Login from './Login/Login'
import PrivateRoute from './Private/Private';
import One from './component/ComponentOne'
 import Two from './component/ComponentTwo'
import Three from './component/ComponentThree'
import Four from './component/ComponentFour'
import Five from './component/ComponentFive'
import Six from './component/ComponentSix'
import Seven from './component/ComponentSeven'
import Eight from './component/ComponentEight'
import Home from './home/Home'
import Message from './Login/message';
import Layout from './Private/LayOut';
import SiginUp from './Login/SiginUp';
import Success from './component/success';
function App  (){

  return (
   <>
    <Routes>
       <Route element={<Layout/>}>
       <Route path='/' element={<PrivateRoute><Home/></PrivateRoute>}></Route>,
       <Route path='/home/one' element={<PrivateRoute><One/></PrivateRoute>}></Route>
       <Route path='/home/Two' element={<PrivateRoute><Two/></PrivateRoute>}></Route>
       <Route path='/home/Three' element={<PrivateRoute><Three/></PrivateRoute>}></Route>
       <Route path='/home/four' element={<PrivateRoute><Four/></PrivateRoute>}></Route>
       <Route path='/home/five' element={<PrivateRoute><Five/></PrivateRoute>}></Route>
       <Route path='/home/six' element={<PrivateRoute><Six/></PrivateRoute>}></Route>
       <Route path='/home/seven' element={<PrivateRoute><Seven/></PrivateRoute>}></Route>
       <Route path='/home/eight' element={<PrivateRoute><Eight/></PrivateRoute>}></Route>
       <Route path='/home/success' element={<PrivateRoute><Success/></PrivateRoute>}></Route>

       
       <Route path="/auth" element={<Login/>} ></Route>    
       <Route path="/SiginUp" element={<SiginUp/>}></Route>
       <Route path="/auth/sms" element={<Message/>}></Route>

       </Route>
    </Routes>
   </>
  )
};

export default App;