import './App.css'
import React from 'react'
import {Link, Route, Routes } from 'react-router-dom'
import Form from './Components/Form/Form'
import Home from './Components/Home'



function App() {
  return (
    <div className='container'>
    <div className="app">
      <header>
      <Link exact to={'/'} className='logo'>
      <h1 className='logo'>Духовное развитие, активный отдых и оздоровление!</h1>
      </Link>                       
      </header>
            

<Routes>
  <Route path='/'  element={<Home/>}/>
  <Route path='/form' element={ <Form/>}/>
</Routes>


<footer>
<div><img src="/logoWhite.png" className="logo2" alt="img"></img></div>
  <div >     
    <h3 className='Candara2White'>Адрес: г. Сочи, ул. Фурманова, д. 38</h3>     
    <h3 className='Candara2White'>По вопросам организации:<br/>+7-988-487-65-27 Ольга 
    </h3>
  </div>
</footer>

</div> 
</div>
  );
}

export default App;
