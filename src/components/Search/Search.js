import React, {useState, useEffect} from 'react';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import axios from 'axios';
import Book from "../Book/Book";
import Books from "../Book/Books";
import AppPagination from "../Pagination";
import './Search.css';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const URL = "http://localhost:5000/api/";

const Search = () => {

  const [books, setBooks] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const pages = new Array(numberOfPages).fill(null).map((v, i) => i);
  const[query, setQuery] = useState('react');

  const searchBooks = async () => {
    await axios.get(URL + "search-by-title", { params: { title: searchValue } })
    .then((res) => setBooks(res.data));
  };

  const fetchHandler = () => {
    axios.get(`http://localhost:5000/api/?page=${pageNumber-1}`).then((res) => res.data).then((res) => {
      console.log(res.totalPages)
      const newBooks = res.books.slice(0, 30)
      setBooks([...newBooks])
      setNumberOfPages(res.totalPages);
    });
  };

  const handleSearch = e => {
    e.preventDefault();
    
    // this.inputVal = e.target.value;
    if(e.target.value === '') {
      console.log("emp");
      
    } else {
      searchBooks(e.target.value);
    }
  }

  const handleChange = e => {
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    fetchHandler()
  }, [pageNumber]);

  const gotoPrevious = () => {
    setPageNumber(Math.max(0, pageNumber - 1));
  };

  const gotoNext = () => {
    setPageNumber(Math.min(numberOfPages - 1, pageNumber + 1));
  };

  return (
    <div className='app'>

      {/* Search items */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2rem'
      }}>
        <form action="/search">
          <TextField
            id="search-bar"
            className="text"
            value={searchValue}
            onChange={handleChange}
            label="Введи название книги"
            variant="outlined"
            placeholder="Искать..."
            size="small"
          />
          <IconButton aria-label="search" onClick={handleSearch} type="submit">
            <SearchIcon style={{ fill: "blue" }} />
          </IconButton>
        </form>
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

      <div className='btns'>
        <AppPagination setPageNumber={setPageNumber} numberOfPages={numberOfPages} page={pageNumber}/>
        
        {/* <button onClick={gotoPrevious}>Previous</button> */}
        {/* {pages.map((pageIndex) => ( */}
          {/* <Stack spacing={2}> */}
            
            {/* <Pagination onChange={()=>setPageNumber(pageNumber)} count={numberOfPages} color="primary" /> */}
          {/* </Stack> */}
          {/* // <button key={pageIndex} onClick={() => setPageNumber(pageIndex)}>
          //   {pageIndex + 1}
          // </button> */}
        {/* ))} */}
        {/* <button onClick={gotoNext}>Next</button> */}
        
      </div>
      
      
    </div>
  );
}

export default Search