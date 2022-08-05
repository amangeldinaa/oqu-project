import React from 'react';
import './Book.css';
import Button from '@mui/material/Button';
import Image from 'mui-image'
import SmoothImage from 'react-smooth-image';

const Book = (props) => {
  const {title, image, price, info, store, link} = props.book;
  return (
    <div className='card hover:bg-gray-900/40 hover:smooth-hover hover:scale-105 transition'>
      <div className='book-image'>
        <SmoothImage
         src={image}
         alt={title}
         transitionTime={1.0}
         containerStyles={{width:'100%', height:'33%'}}
         imageStyles={{width:'100%', height:'100%'}}
        />
      </div>
      
        {/* <img src={image} alt={title}/>   */}

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