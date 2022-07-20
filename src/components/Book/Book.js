import React from 'react'
import './Book.css'

const Book = (props) => {
  const {title, image, price, info, store, link} = props.book;
  return (
    <div className='card'>
        <img src={image} alt={title}/>  
        <h3>{title}</h3>
        <h4>{store}</h4>
        <h5>{info}</h5>
        <a href={link}>Visit website</a>
        <h4>{price} тг</h4>
    </div>
  )
}

export default Book