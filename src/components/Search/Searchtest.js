import React, {useState, useEffect} from 'react';
import Book from "../Book/Book";
import './Search.css';
import {getProducts} from '../productActions.js';
import { useDispatch, useSelector } from 'react-redux';

const URL = "http://localhost:5000/api/";

const Searchtest = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
      }, [dispatch]);
    
    const {products} = useSelector(state => state.products);

    return (
        <div className='app'>
    
          
          <div>
            <ul className="ul-1">
                {/* {console.log(books)} */}
              {products &&
                products.map((product, i) => (
                  <ul className="ul-2" key={i}>
                    <Book book={product} />
                  </ul>
                ))}
            </ul>
          </div>
    
          
        </div>
      );

}

export default Searchtest