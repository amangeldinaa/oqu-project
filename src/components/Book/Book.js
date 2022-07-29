import React from 'react';
import './Book.css';
import Button from '@mui/material/Button';

const Book = (props) => {
  const {title, image, price, info, store, link} = props.book;
  return (
    <div className='card'>
        <img src={image} alt={title}/>  

        <div className="title">{title}</div>

        <div className="info">{info}</div>
        
        <div className='price-store'>
          <div>{price}тг</div>      
          <div>{store}</div>
        </div>

        <div className='link-btn'>
          <Button style={{
              backgroundColor: '#f3e5d0',
              borderRadius: '50px'}} href={link}  target="_blank" variant="contained">
            Перейти на сайт
          </Button>
        </div>
        
        <a href={link}></a>
        
    </div>
  )
}

export default Book