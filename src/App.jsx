import './App.css';
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Books from "./components/Book/Books"
import Search from "./components/Search/Search"
import Home from "./components/Home/Home"
import {Route, Routes} from 'react-router-dom'
import React from 'react'


function App() {
  return (
  // <div className='app'>
    <React.Fragment>
      {/* <header>
        <Header />
      </header> */}
      <main>
        <Routes>
          <Route path="/" element={<Home/>} exact/>
          <Route path="/home" element={<Home/>} exact/>
          <Route path="/allbooks" element={<Search/>} exact/>
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
      {/* <Search/> */}
    </React.Fragment>
  );
}

export default App;


//TODO loading page