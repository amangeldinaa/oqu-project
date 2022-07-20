import React, { useState, useEffect } from 'react';
import axios from "axios";
import Book from './Book'
import './Book.css'

const URL = "http://localhost:5000/api/";

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Books = () => {
  const [books, setBooks] = useState();
  
  useEffect(() => {
    fetchHandler().then((data) => setBooks(data.books));
  }, []);

  console.log(books);
  return (
    <div>
      <ul className="ul-1">
        {books &&
          books.map((book, i) => (
            <ul className="ul-2" key={i}>
              <Book book={book} />
            </ul>
          ))}
      </ul>
    </div>
  )
}

export default Books