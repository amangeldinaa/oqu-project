const Router = require('express');
const searchController = require('./controllers/searchController');
const router = new Router();

router.get('/search-by-title', searchController.searchByTitle) ///smth/api/search-by-title
router.get('/search-by-store-name', searchController.searchByStoreName)
router.get('/', searchController.getAll)


module.exports = router;