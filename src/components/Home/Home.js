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
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Logo from "../../assets/Logo.png";
import {NavLink} from "react-router-dom";

const Home = () => {

  const handleSearch = () => {
    <Routes>
      <Route path="/allbooks" element={<Search/>} exact/>\
    </Routes>
  }

  return (
    <div className="container-home">
      
      <div className="inner-cont">
        <div className='logo'>
            {<img LinkComponent={NavLink} to="/home" style={{width:'4%', height:'auto'}} src={Logo}/>}
        </div>
        
        <div className="row-1">
          <div className='col-1'>
            <div className="primary-text">
              {`Быстро & Доступно`}
            </div>
            <div className="secondary-text">
              {`Найди и сравнивай стоимость любимых книг с местных магазинов`}
            </div>
            <div className="search-bar">
              
              <Button 
                sx={{
                  maxWidth: '70%', maxHeight: '6vh', minWidth: '70%', minHeight: '6vh',
                  borderColor: '#b0643e',
                  color:'#b0643e',
                  borderRadius: '50px',
                  // width: '60%'
                }}
                variant="outlined"
                component={Link} to="/allbooks"
                  // target="_blank" 
                  // InputProps={{endAdornment: 
                  //   }}
                >Начать искать 
                <IconButton disabled="true" aria-label="search"  type="Submit">
                    <SearchIcon style={{ fill: "#b0643e" }} />
                </IconButton>
              </Button>
            </div>
          </div>

          <div className='col-2'>
            <img className="intro-book" src={IntroBook}/>
          </div>

          <div className='col-3'>
            <div className='stores-text'>
              Анализируй цены с магазинов:
            </div>

            <div className='stores'>
            <div className='img-2'>
              <img style={{width:'35%', height:'auto'}} src={WildLogo}/>
            </div>
            <div className='img-1'>
              <img style={{width:'25%', height:'auto'}} src={FlipLogo}/>
              <img style={{width:'33%', height:'auto'}} src={MelomanLogo}/>
            </div>
            
              {/* <img style={{width:'20%', height:'auto'}} src={FlipLogo}/>
              <img style={{width:'20%', height:'auto'}} src={MelomanLogo}/>
              <img style={{width:'20%', height:'auto'}} src={WildLogo}/> */}
            </div>
            
            
          </div>
          
        </div>


        
        
        
      </div>
        <div className="shelf">
            <div className="top"></div>
            <div className="front"></div>
            <div className="shadow"></div>
        </div>

        <div className="under-shelf">
            <div className='under-col'>
                <div className='under-col-img'>
                  <img 
                    src="//cdn.f.kz/prod/1834/1833874_550.jpg" 
                    alt="flip-img"
                    style={{
                      width: '55%',
                      height: 'auto',
                      filter: 'drop-shadow(10px 10px 10px #c2b5a3)'
                    }}/>
                </div>
                <div className='under-col-text'>
                  <div className="text-wrapper">
                  <div className='intro-book-title'>
                    {'К себе нежно'}
                  </div>
                  <div className='intro-book-info'>
                    {'Flip'}
                  </div>
                  <Button 
                    sx={{
                        borderColor: '#b0643e',
                        color:'#b0643e',
                        borderRadius: '50px',
                        maxWidth: '60%', minWidth: '60%'
                    }}
                    variant="outlined"
                    href={'https://www.flip.kz/catalog?prod=1833874'}  
                    target="_blank" 
                    >Купить
                    </Button>
                  </div>
                </div>
            </div>

            <div className='under-col'>
                <div className='under-col-img'>
                  <img 
                    src="https://simg.marwin.kz/media/catalog/product/cache/8d1771fdd19ec2393e47701ba45e606d/7/1/kolgan_dj_knijnyy_magazinchik_schastya.jpg" 
                    alt="flip-img"
                    style={{
                      width: '55%',
                      height: 'auto',
                      filter: 'drop-shadow(10px 10px 10px #c2b5a3)'
                    }}/>
                </div>
                <div className='under-col-text'>
                  <div className="text-wrapper">
                  <div className='intro-book-title'>
                    {'Книжный магазинчик счастья'}
                  </div>
                  <div className='intro-book-info'>
                    {'Meloman'}
                  </div>
                  <Button 
                    sx={{
                        borderColor: '#b0643e',
                        color:'#b0643e',
                        borderRadius: '50px',
                        maxWidth: '60%', minWidth: '60%'
                    }}
                    variant="outlined"
                    href={'https://www.flip.kz/catalog?prod=1833874'}  
                    target="_blank" 
                    >Купить
                    </Button>
                  </div>
                </div>
            </div>

            <div className='under-col'>
              <div className='under-col-img'>
                  <img 
                    src="//cdn.f.kz/prod/485/484566_550.jpg" 
                    alt="flip-img"
                    style={{
                      width: '57%',
                      height: 'auto',
                      filter: 'drop-shadow(10px 10px 10px #c2b5a3)'
                    }}/>
                </div>
                <div className='under-col-text'>
                  <div className="text-wrapper">
                  <div className='intro-book-title'>
                    {'Мартин Иден'}
                  </div>
                  <div className='intro-book-info'>
                    {'Wildberries'}
                  </div>
                  <Button 
                    sx={{
                        borderColor: '#b0643e',
                        color:'#b0643e',
                        borderRadius: '50px',
                        maxWidth: '60%', minWidth: '60%'
                    }}
                    variant="outlined"
                    href={'https://www.flip.kz/catalog?prod=1833874'}  
                    target="_blank" 
                    >Купить
                    </Button>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home