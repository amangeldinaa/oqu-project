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

const storeOptions = [
  {
    "id": 1,
    "name": "flip"
  },
  {
    "id": 2,
    "name": "meloman"
  },
  {
    "id": 3,
    "name": "wildberries"
  }
]

const Search = () => {

  const [books, setBooks] = useState();
  const [searchValue, setSearchValue] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [stores, setStores] = useState([]);
  const [checked, setChecked] = useState(false);
  const [checkedM, setCheckedM] = useState(false);

  const fetchHandler = () => {
    axios.get(`http://localhost:5000/api/?page=${pageNumber-1}`, 
    { params: { title: searchValue.trim(), store: stores[0] }})
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

  // const handleCheckFlip = (e) => {
  //   setCheckedF(e.target.checked);
  //   if(checkedF) {
  //     setStore("meloman");
  //   }
    
  //   console.log(store);
  //   // fetchHandler();
  // }

  const handleCheckMeloman = (e) => {
    console.log(e.target.checked);
    setCheckedM(e.target.checked);
    if(checkedM) {
      setStores("flip");
    }
    
    // console.log(store);
    // fetchHandler();
  }

  const handleCheckbox = (e) => {
    // console.log( e.target.value);
    console.log(stores)
    const currentStoreChecked = e.target.value;
    console.log(currentStoreChecked);
    const allStoresChecked = [...stores];
    const indexFound = allStoresChecked.indexOf(currentStoreChecked);
  
    let updatedStores;
    if(indexFound === -1) {
      updatedStores = [...stores, currentStoreChecked];
      setStores(updatedStores);
    } else {
      updatedStores = [...stores];
      updatedStores.splice(indexFound, 1);
      setStores(updatedStores);
    }

    // fetchHandler()
  } 

  useEffect(() => {

    fetchHandler()
  }, [stores]);
 
  useEffect(() => {
    console.log("searchValue", searchValue);
    if (searchValue) {
      fetchHandler()
    }
  }, [searchValue]);

  useEffect(() => {
    fetchHandler()
  }, [pageNumber]);

  return (
    <div className='app'>
      {/* Search items */}
      <div className="search">
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
            <IconButton sx={{visibility: searchValue? "visible": "hidden"}} aria-label="search" onClick={handleClear} type="Submit">
              <ClearIcon style={{ fill: "blue" }} />
            </IconButton>}}
          />
          
          <IconButton disabled="true" aria-label="search" onClick={handleSearch} type="Submit">
            <SearchIcon style={{ fill: "blue" }} />
          </IconButton>
        </form>
      </div>
  
    <div className="wrapper">
      <div className="left-cont" >
        Выбери магазин

        <FormControlLabel 
          control={<Checkbox 
            onChange={handleCheckbox}
            value="flip"/>} 
          label="Flip"/>
          
        <FormControlLabel 
          control={<Checkbox 
            onChange={handleCheckbox}
            value="meloman"/>} 
          label="Meloman"
        />

        <FormControlLabel 
          control={<Checkbox 
            onChange={handleCheckbox}
            value="wildberries"/>} 
          label="Wildberries"
        />
          
        <div style={{marginTop:'3rem'}}></div>
        Выбери ценовую категорию
      </div>

      <div className="right-cont">
        
        {/* Listing items */}
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

      <div className="pagination">
          {/* Pagination */}
          {numberOfPages>0 &&(
          <div className='btns'>
            <AppPagination setPageNumber={setPageNumber} numberOfPages={numberOfPages} page={pageNumber}/>
          </div>)}
      </div>
      
      
      
      

      
    </div>
  );
}

export default Search


// https://www.youtube.com/watch?v=81gvCHNSnH8