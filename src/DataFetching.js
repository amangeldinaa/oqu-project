import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {
    const[posts, setPosts] = useState([]);

    axios.get('http://localhost:5000/api/search-by-title').then((res) => {
        console.log(res.message);
    }) 

    // useEffect(() => {
    //     axios.get('http://localhost:5000/api/search-by-title')
    //         .then(res => {
    //             console.log(res);
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    // })
    return (
        <div>

        </div>
    )
}

export default DataFetching