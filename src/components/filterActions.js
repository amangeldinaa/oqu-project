import axios from 'axios';

const STOP_LOADING = 'STOP_LOADING';
const SHOW_ERROR_MESSAGE = 'SHOW_ERROR_MESSAGE';
const GET_PRODUCTS = 'GET_PRODUCTS';

export const getProductsByFilter = arg => async dispatch => {
	try {
		const response = await axios.post('/api/search', arg);

		dispatch({
			type: GET_PRODUCTS,
			payload: response.data.products,
		});
	} catch (err) {
		console.log('getProductsByFilter api error: ', err);
		dispatch({ type: STOP_LOADING });
		dispatch({
			type: SHOW_ERROR_MESSAGE,
			payload: err.response.data.errorMessage,
		});
	}
};