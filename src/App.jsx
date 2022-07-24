import './App.css';
import Header from "./components/Header/Header"
import Books from "./components/Book/Books"
import Search from "./components/Search/Search"
import Home from "./components/Home"
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'
import React from 'react'


function App() {
  return (
  // <div className='app'>
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
        <Route path="/" element={<Search/>} exact/>
          <Route path="/home" element={<Home/>} exact/>
          <Route path="/allbooks" element={<Search/>} exact/>
        </Routes>
      </main>
      {/* <Search/> */}
    </React.Fragment>
  );
}

export default App;


//TODO loading page