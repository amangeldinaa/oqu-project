import React from 'react';
import './Book.css';
import './Bookmob.css';
import Button from '@mui/material/Button';

const Bookmob = (props) => {
  const {title, image, price, info, store, link} = props.book;
  return (
    <div className='card-m'>
        <div style={{width:'40%'}}>
            <img className="card-img" src={image} alt={title}/>  
        </div>
        
        <div className="second-card">
            <div className="title-m">{title}</div>

        <div className="info-m">{info}</div>
        
        <div className='price-store-m'>
          <div>{price}тг</div>      
          <div>{store}</div>
        </div>

        <div className='link-btn-m'>
          <Button 
            sx={{
              borderColor: '#b0643e',
              color:'#b0643e',
              borderRadius: '50px',
              fontSize: '12px',
            }}
            variant="outlined"
            href={link}  
            target="_blank" 
          >Перейти на сайт
          </Button>
        </div>
        
        <a href={link}></a>
        </div>
        
        
    </div>
  )
}

export default Bookmob