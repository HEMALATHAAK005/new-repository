import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MHome from './Makemytrip/MHome';
import MLogin from './Makemytrip/MLogin';
import MForget from './Makemytrip/MForget';
import MSignup from './Makemytrip/MSignup';
import Maboutus from './Makemytrip/Maboutus';
import MWelcomepackage from './Makemytrip/MWelcomepackage';
import MTourpackage from './Makemytrip/MTourpackage';
import MTq from './Makemytrip/MTq';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<MHome/>}/>
    <Route path='/login' element={<MLogin/>}/>
    <Route path='/forgot' element={<MForget/>}/>
    <Route path='/sign' element={<MSignup/>}/>
    <Route path='/aboutus' element={<Maboutus/>}/>
    <Route path='/welcomepackage' element={<MWelcomepackage/>}/>
    <Route path='/tourpackage' element={<MTourpackage/>}/>
    <Route path='/thankyou' element={<MTq/>}/>
    </Routes>
    </BrowserRouter>
   
  
    </div>
  );
}

export default App;
