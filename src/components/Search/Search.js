import React, {useState} from 'react';
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
// import {getProductsByFilter} from "../filterActions" //??

const Search = () => {

    const [text, setText] = useState('');

    const handleSearch = e => {
        setText(e.target.value);
        // <h3>Inside function</h3>
        // dispatchEvent(getProductsByFilter({type: 'text', query: e.target.value}));
    }

    const SearchBar = ({setSearchQuery}) => (
        <form action="/search-by-title" method="GET">
          <TextField
            id="search-bar"
            className="text"
            onChange={handleSearch}
            onInput={(e) => {
              setSearchQuery(e.target.value);
            }}
            label="Введи название книги"
            variant="outlined"
            placeholder="Искать..."
            size="small"
          />
          <IconButton type="submit" aria-label="search">
            <SearchIcon style={{ fill: "blue" }} />
          </IconButton>
        </form>
      );

  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: '2rem'}}>
        <SearchBar/>
      </div>
  )
}

export default Search