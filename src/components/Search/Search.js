import React, {useState, useEffect} from 'react';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import axios from 'axios';
import Book from "../Book/Book";
import Books from "../Book/Books";
import AppPagination from "../Pagination";
import './Search.css';
import { useNavigate } from 'react-router-dom';

const URL = "http://localhost:5000/api/";

const Search = () => {

  const [books, setBooks] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const history = useNavigate();

  const searchBooks = async () => {
    console.log("searchValue")   
     console.log(searchValue)
    await axios.get(URL + "search-by-title", { params: { title: searchValue.trim() } })
    .then((res) => {
      console.log(res.data);
      setBooks(res.data)});
      
      setNumberOfPages(0);
  };

  const fetchHandler = () => {
    axios.get(`http://localhost:5000/api/?page=${pageNumber-1}`, { params: { title: searchValue.trim() } })
    .then((res) => res.data).then((res) => {
      console.log(res.books)
      console.log(res.totalPages)
      const newBooks = res.books.slice(0, 30)
      setBooks(res.books)
      setNumberOfPages(res.totalPages);
    });
  };

  const handleSearch = e => {
    e.preventDefault();
    fetchHandler();
    // searchBooks(e.target.value);
    // searchBooks();
    // if (searchValue.trim()) {
    //   searchBooks();
    // } else {
    //   history('/');
    // }
  }

  const handleChange = e => {
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    fetchHandler()
  }, [pageNumber]);

  return (
    <div className='app'>

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
            onChange={handleChange}
            label="Введи название книги"
            variant="outlined"
            placeholder="Искать..."
            size="small"
          />
          <IconButton aria-label="search" onClick={handleSearch} type="Submit">
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
      {console.log(numberOfPages)}
      {console.log("numberOfPages")}
      {numberOfPages>0 &&(
      <div className='btns'>
        <AppPagination setPageNumber={setPageNumber} numberOfPages={numberOfPages} page={pageNumber}/>
      </div>)}
    </div>
  );
}

export default Search