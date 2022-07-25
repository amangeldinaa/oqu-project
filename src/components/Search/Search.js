import React, {useState, useEffect, useCallback} from 'react';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import axios from 'axios';
import Book from "../Book/Book";
import AppPagination from "../Pagination";
import './Search.css';

const URL = "http://localhost:5000/api/";

const Search = () => {

  const [books, setBooks] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);

  const searchBooks = async () => {
    await axios.get(URL + "search-by-title", { params: { title: searchValue.trim() } })
    .then((res) => {
      setBooks(res.data)});
      
      setNumberOfPages(0);
  };

  const fetchHandler = () => {
    axios.get(`http://localhost:5000/api/?page=${pageNumber-1}`, { params: { title: searchValue.trim() } })
    .then((res) => res.data).then((res) => {
      const newBooks = res.books
      setBooks(newBooks)
      setNumberOfPages(res.totalPages);
    });
  };

  const handleSearch = e => {
    e.preventDefault();
    fetchHandler();
  }

  const handleClear = () => {
    setSearchValue('');
  }

  const handleCheckFlip = () => {
    console.log("here")
  }

  const handleCheckMeloman = () => {
    console.log("here")
  }

  useEffect(() => {
    console.log("searchValue", searchValue);
    if (searchValue) {
      fetchHandler()
    }
    // debounce(fetchHandler(), 1000);
    // setInterval(fetchHandler(), 1000);
    // if(!searchValue) {
    //   setPageNumber(1);
    // }
    // if (searchValue) {
    //   const Debounce = setTimeout(() => {
    //     fetchHandler();
    //   }, 1000);
    // }
  }, [searchValue]);

  useEffect(() => {
    fetchHandler()
  }, [pageNumber]);

  return (
    <div className='app'>
      <FormControlLabel control={<Checkbox defaultChecked onChange={handleCheckFlip}/>} label="Flip" />
      <FormControlLabel control={<Checkbox defaultChecked onChange={handleCheckMeloman}/>} label="Meloman" />

      {/* Search items */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2rem'
      }}>
        
        <form >
          <TextField
            id="search-bar"
            className="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            label="Введи название книги"
            variant="outlined"
            placeholder="Искать..."
            size="small"
            InputProps={{endAdornment: 
          //   <Button onClick={handleClear} className="materialBtn">
          //       	<ClearIcon fontSize="small" />
          // </Button>
          
            <IconButton sx={{visibility: searchValue? "visible": "hidden"}} aria-label="search" onClick={handleClear} type="Submit">
              <ClearIcon style={{ fill: "blue" }} />
            </IconButton>}}
          />
          
          
          <IconButton disabled="true" aria-label="search" onClick={handleSearch} type="Submit">
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

      {/* Pagination */}
      {numberOfPages>0 &&(
      <div className='btns'>
        <AppPagination setPageNumber={setPageNumber} numberOfPages={numberOfPages} page={pageNumber}/>
      </div>)}
    </div>
  );
}

export default Search