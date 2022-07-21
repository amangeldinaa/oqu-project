import './App.css';
import Header from "./components/Header/Header"
import Books from "./components/Book/Books"
import Search from "./components/Search/Search"
import Home from "./components/Home"
import {Switch, Route, Routes} from 'react-router-dom'
import React from 'react'


function App() {
  return (
  <div className='app'>
    {/* <React.Fragment> */}
      
      <header>
        <Header />
      </header>
      {/* <main>
        <Routes>
          <Route path="/home" component={<Home/>} exact/>
          <Route path="/allbooks" component={<Search/>} exact/>
        </Routes>
      </main>
    </React.Fragment> */}
    
      
      
      <Search/>
      {/* <Books/> */}
    </div>
  );
}

export default App;
