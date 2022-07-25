import axios from 'axios';

const STOP_LOADING = 'STOP_LOADING';
const START_LOADING = 'START_LOADING';
const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE';
const GET_PRODUCTS = 'GET_PRODUCTS';

export const getProducts = () => async dispatch => {
	try {
        axios.get(`http://localhost:5000/api/`, )
        .then((res) => res.data).then((res) => {
        console.log(res);
		dispatch({
			type: GET_PRODUCTS,
			payload: res.products,
		});
        })
		// const response = await axios.get('http://localhost:5000/api/');
        
	} catch (err) {
		console.log('getProducts api error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};