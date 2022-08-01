const FuzzySearch = require ('fuzzy-search');
const {Schema, model} = require ('mongoose');
const Store = require('../database/models/Store');

class searchController {
    async searchByTitle(req, res) {
        try {
            // const title = req.query.title;
            // const books = await Store.find({title});
            // return res.json(books);

            const title = new RegExp(req.query.title, 'i');
            const posts = await Store.find({title});
            return res.json(posts);
        } catch(e) {
            return res.status(500).send();
        }

        // try {
        //       const books = await Store.fuzzySearch("алхимик");
        //     //   const result = searcher.search('алхимик');
        //       return res.json(books).send();
        //     } catch(e) {
        //         console.log(e);
        //         return res.status(500).send();
        //     }
    }
    async searchByStoreName(req, res) {
        try {
            const price = req.query.price;
            const books = await Store.find({ price: { $lte: price} } );
            const total = await Store.find({ price: { $lte: price} } ).countDocuments({});
            res.json({
                total,
                books
            });
            
            // const store = req.query.store;
            // const books = await Store.find({storeName: store});
            // return res.json(books);
        } catch(e) {
            return res.status(500).send();
        }
    }


    async getAll(req, res) {

        try {
            const PAGE_SIZE = 40;
            const page = parseInt(req.query.page || "0");
            const price = req.query.price;
            
            const stores = req.query.store.split(';');  
            const storesEmpty = (stores[0]==='undefined'&&stores[1]==='undefined'&&stores[2]==='undefined') ||
                                (stores.includes('flip')&&stores.includes('meloman')&&stores.includes('wildberries'))

            //if no title, no store
            if(Object.keys(req.query.title).length === 0 && storesEmpty) { 
                const books = await Store.find({ price: { $lte: price }})
                    .limit(PAGE_SIZE)
                    .skip(PAGE_SIZE * page);
                const total = await Store.find({ price: { $lte: price }}).countDocuments({});
                res.json({
                    totalPages: Math.ceil(total / PAGE_SIZE),
                    books
                });
            } 

            //if title, no store 
            else if(Object.keys(req.query.title).length !== 0 && storesEmpty) {
                
                const title = new RegExp(req.query.title, 'i');
                const books = await Store.find({title}).find({ price: { $lte: price }})
                    .limit(PAGE_SIZE)
                    // .skip(PAGE_SIZE * page);
                const total = await Store.find({title}).find({ price: { $lte: price }}).countDocuments({});
                res.json({
                    totalPages: Math.ceil(total / PAGE_SIZE),
                    books
                });

            //if no title, store
            } else if(Object.keys(req.query.title).length === 0 && !storesEmpty) {
                let storeOne, storeTwo, storeThree;
                if(stores[0] === 'undefined') {
                    storeOne = '';
                } else {
                    storeOne = stores[0];
                }
                if(stores[1] !== 'undefined') {
                    storeTwo = stores[1];
                } else {
                    storeTwo = '';
                }
                if(stores[2] !== 'undefined') {
                    storeThree = stores[2];
                } else {
                    storeThree = '';
                }
               
                const booksOne = await Store.find({store: storeOne}).find({ price: { $lte: price }});
                const booksTwo = await Store.find({store: storeTwo}).find({ price: { $lte: price }});
                const booksThree = await Store.find({store: storeThree}).find({ price: { $lte: price }});
                const results = [...booksOne, ...booksTwo, ...booksThree]; 
                const total = results.length;
                const books = results.slice(page*PAGE_SIZE, PAGE_SIZE+(page*PAGE_SIZE))
                
                res.json({
                    totalPages: Math.ceil(total / PAGE_SIZE),
                    books
                });

            //if title and store
            } else {
                let storeOne, storeTwo, storeThree;
                if(stores[0] === 'undefined') {
                    storeOne = '';
                } else {
                    storeOne = stores[0];
                }
                if(stores[1] !== 'undefined') {
                    storeTwo = stores[1];
                } else {
                    storeTwo = '';
                }
                if(stores[2] !== 'undefined') {
                    storeThree = stores[2];
                } else {
                    storeThree = '';
                }
                
                const title = new RegExp(req.query.title, 'i');
                const bookOne = await Store.find({store: storeOne}).find({title}).find({ price: { $lte: price }});
                const bookTwo = await Store.find({store: storeTwo}).find({title}).find({ price: { $lte: price }});
                const bookThree = await Store.find({store: storeThree}).find({title}).find({ price: { $lte: price }});
                const results = [...bookOne, ...bookTwo, ...bookThree]
                const total = [...bookOne, ...bookTwo, ...bookThree].length;
                const books = results.slice(page*PAGE_SIZE, PAGE_SIZE+(page*PAGE_SIZE))
                res.json({
                    totalPages: Math.ceil(total / PAGE_SIZE),
                    books
                });
            }
        } catch(e) {
            return res.status(500).send();
        }
    }
}

module.exports = new searchController();

