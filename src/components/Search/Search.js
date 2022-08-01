import React, {useState, useEffect, useCallback} from 'react';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import TextField from "@mui/material/TextField";
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Slider from '@mui/material/Slider';
import axios from 'axios';
import Book from "../Book/Book";
import AppPagination from "../Pagination";
import './Search.css';
import {ReactComponent as FilterIcon} from "../../assets/filtericon.svg";
import {Link} from "react-router-dom";
import Logo from "../../assets/Logo.png";
import {REACT_APP_BACKEND_URL} from '../../constants/constants'


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
  const [price, setPrice] = useState(75000);
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(75000);

  console.log(process.env.REACT_APP_BACKEND_URL, 'REACT_APP_BACKEND_URL');

  const fetchHandler = () => {
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/`, 
    { params: {
      page: pageNumber - 1,
      title: searchValue.trim(), 
      store: `${stores[0]};${stores[1]};${stores[2]}`,
      price: price }})
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
  } 

  const handleMaxPrice = (e) => {
    setMaxPrice(e.target.value);
    setPrice(e.target.value)
  } 

  useEffect(() => {
    console.log("stores param: ",`${stores[0]};${stores[1]};${stores[2]}`)
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

  useEffect(() => {
    console.log(price)
    fetchHandler()
  }, [price]);

  return (
    <div className='app'>
      <div className='cont'>
        <div className='logo'>
          <Link to="/home">
            <img
              style={{width:'4%', height:'auto'}}
              src={Logo}
              alt="logo"
            />
        </Link>
          {/* {<img LinkComponent={NavLink} to="/home" style={{width:'4%', height:'auto'}} src={Logo}/>} */}
        </div>

      {/* Search items */}
      <div className="search">
        <form >
          <TextField
            id="search-bar"
            className="inputRounded"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            label="Введи название книги"
            variant="outlined"
            placeholder="Искать..."
            size="small"
            InputProps={{endAdornment: 
            <IconButton sx={{visibility: searchValue? "visible": "hidden"}} aria-label="search" onClick={handleClear} type="Submit">
              <ClearIcon style={{ fill: "#7f472c" }} />
            </IconButton>}}
          />
          
          <IconButton aria-label="search" onClick={handleSearch} type="Submit">
            <SearchIcon style={{ fill: "#7f472c" }} />
          </IconButton>
        </form>
      </div>
  
    <div className="wrapper">
      <div className="left-cont" >
        <div className="filter"><FilterIcon/> Фильтры </div>
        <div class="divider div-transparent"></div>
        <div className="double-4">Выбери магазин</div>

        <FormControlLabel 
          sx={{marginBottom:"-0.5rem"}}
          control={<Checkbox 
            onChange={handleCheckbox}
            value="Flip"/>} 
          label="Flip"/>
          
        <FormControlLabel 
          sx={{
            marginBottom:"-0.5rem",
            // fontFamily: 'Open Sans', sansSerif,
            // fontFamily: 'Raleway', sansSerif, 
            // fontFamily: 'Titillium Web', sansSerif,
            // fontFamily: 'Uchen', serif
          }}
          control={<Checkbox 
            onChange={handleCheckbox}
            value="Meloman"/>} 
          label="Meloman"
        />

        <FormControlLabel 
          sx={{marginBottom:"-0.5rem"}}
          control={<Checkbox 
            onChange={handleCheckbox}
            value="Wildberries"/>} 
          label="Wildberries"
        />
          
        <div style={{marginTop:'2rem'}}></div>
        <div style={{marginBottom:'1rem'}} className="double-4">Выбери ценовую категорию</div>
        <div className="price-btns">
          от <TextField
            id="min"
            disabled="true"
            // className="inputRounded"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            // label={minPrice}
            variant="outlined"
            placeholder={minPrice}
            size="small"
            sx={{width:'34%', height:'5%' }}
          /> до <TextField
            id="max"
            // className="inputRounded"
            value={maxPrice}
            onChange={handleMaxPrice}
            // label={minPrice}
            variant="outlined"
            placeholder={maxPrice}
            size="small"
            sx={{width:'34%', height:'5%'}}
          /> тг
        </div>
        <Slider 
          sx={{color:'#7f472c',marginLeft:'0.5rem', marginTop:'0.7rem'}}
          defaultValue={30000}  
          aria-label="Default" 
          valueLabelDisplay="auto" 
          onChange={(e) => {setPrice(e.target.value)}}
          max={maxPrice}
          min={minPrice}
        />
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
            <AppPagination  setPageNumber={setPageNumber} numberOfPages={numberOfPages} page={pageNumber}/>
          </div>)}
      </div>
      </div>
    </div>
  );
}

export default Search