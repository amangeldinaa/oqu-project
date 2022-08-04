import React from 'react';
import './Book.css';
import Button from '@mui/material/Button';

const Book = (props) => {
  const {title, image, price, info, store, link} = props.book;
  return (
    <div className='card hover:bg-gray-900/40 hover:smooth-hover hover:scale-105 transition'>
        <img src={image} alt={title}/>  

        <div className="title">{title}</div>

        <div className="info">{info}</div>
        
        <div className='price-store'>
          <div>{price}₸</div>      
          <div>{store}</div>
        </div>

        <div className='link-btn'>
          <Button 
            sx={{
              borderColor: '#b0643e',
              color:'#b0643e',
              borderRadius: '50px'
            }}
            variant="outlined"
            href={link}  
            target="_blank" 
          >Перейти на сайт
          </Button>
        </div>
        
        <a href={link}></a>
        
    </div>
  )
}

export default Book