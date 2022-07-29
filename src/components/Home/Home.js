import React from 'react';
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import {Route, Routes} from 'react-router-dom';
import Search from "../Search/Search";
import './Home.css'
import FlipLogo from "../../assets/flip_logo.png";
import MelomanLogo from "../../assets/meloman_logo.png";
import WildLogo from "../../assets/wildberries_logo.png";
import IntroBook from "../../assets/home-book.png";

const Home = () => {

  const handleSearch = () => {
    <Routes>
      <Route path="/allbooks" element={<Search/>} exact/>\
    </Routes>
  }

  return (
    <div className="container-home">
      <div className="inner-cont">
        <div className="row-1">
          
          <div className='col-1'>
            <div className="primary-text">
              {`Быстро & Доступно`}
            </div>
            <div className="secondary-text">
              {`Найди и сравнивай стоимость любимых книг с местных магазинов`}
            </div>
            <div className="search-bar">
              <TextField
                InputProps={{endAdornment: 
                  <IconButton aria-label="search"  type="Submit">
                    <SearchIcon style={{ fill: "#91857f" }} />
                  </IconButton>}}
                sx={{
                  color: 'white',
                }}
                className="inputRounded"
                placeholder="Введи название книги"
                variant="outlined"
                size="small"
                
              />
            </div>
          </div>

          <div className='col-2'>
            <img className="intro-book" src={IntroBook}/>
          </div>

          <div className='col-3'>
            <div className='img-1'>
              <img style={{width:'25%', height:'auto'}} src={FlipLogo}/>
              <img style={{width:'33%', height:'auto'}} src={MelomanLogo}/>
            </div>
            <div className='img-2'>
              <img style={{width:'30%', height:'auto'}} src={WildLogo}/>
            </div>
            
          </div>
          
        </div>


        
        
        <div className="shelf">
            {/* <div className="top"></div>
            <div className="front"></div>
            <div className="shadow"></div> */}
        </div>
      </div>
    </div>
  )
}

export default Home