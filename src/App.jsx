import './App.css';
import Header from "./components/Header/Header"
import Books from "./components/Book/Books"
import Search from "./components/Search/Search"
import './components/Book/Book.css'
import Book from './components/Book/Book'
import React, { useState, useEffect } from 'react';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import axios from "axios";

const URL = "http://localhost:5000/api/";

function App() {

  const [books, setBooks] = useState();
  const [searchValue, setSearchValue] = useState("")

  const searchBooks = async () => {
    await axios.get(URL + "search-by-title", { params: { title: searchValue } })
    .then((res) => setBooks(res.data));
  };

  const fetchHandler = () => {
    axios.get(URL).then((res) => res.data).then((res) => {

      const newBooks = res.books.slice(0, 10)
      setBooks([...newBooks])
    });
  };


  const handleSearch = e => {
    e.preventDefault();

    searchBooks(e.target.value);

    // <h3>Inside function</h3>
    // dispatchEvent(getProductsByFilter({type: 'text', query: e.target.value}));
  }

  const SearchBar = ({ setSearchQuery }) => (
    <form >
      <TextField
        id="search-bar"
        className="text"
        value={searchValue}
        onChange={(e) => {setSearchValue(e.target.value)}}
        // onInput={(e) => {
        //   setSearchValue(e.target.value);
        // }}
        label="Введи название книги"
        variant="outlined"
        placeholder="Искать..."
        size="small"
      />
      <IconButton aria-label="search" onClick={handleSearch}>
        <SearchIcon style={{ fill: "blue" }} />

      </IconButton>
    </form>
  );

  useEffect(() => {
    fetchHandler()
  }, []);

  return (
    <div className='app'>
      <Header />
      {/* <Search/> */}
      {/* <Books/> */}

      {/* Search items */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2rem'
      }}>
        <SearchBar />
      </div>

      {/* Listing items */}
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
    </div>
  );
}

export default App;
