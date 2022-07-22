import './App.css';
import Header from "./components/Header/Header"
import Books from "./components/Book/Books"
import Search from "./components/Search/Search"
import Home from "./components/Home"
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import React from 'react'


function App() {
  return (
  <div className='app'>
    
      <header>
        <Header />
      </header>
    
      {/* <Routes> */}
        {/* <Route
          path="/home"
          component={Home}
        /> */}
      {/* </Routes> */}
       
      {/* <main>
        <Routes>
          <Route path="/home" component={<Home/>} exact/>
          <Route path="/allbooks" component={<Search/>} exact/>
        </Routes>
      </main>
    </React.Fragment> */}
    
      
      
      <Search/>
      {/* <Books/> */}
    
    {/* <React.Fragment> */}
      
      
    </div>
  );
}

export default App;


//TODO loading page