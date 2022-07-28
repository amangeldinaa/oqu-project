import React from 'react'
import './Book.css'

const Book = (props) => {
  const {title, image, price, info, store, link} = props.book;
  return (
    <div className='card'>
        <img src={image} alt={title}/>  
        <div>{title}</div>
        
        <h5>{info}</h5>
        <div className='price-store'>
          <h4>{price} тг</h4>
          <h4>{store}</h4>
        </div>
        <a href={link}>Посмотреть Магазин</a>
        
    </div>
  )
}

export default Book