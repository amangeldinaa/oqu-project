const {Schema, model, mongoose} = require ('mongoose');

const Store = new Schema ({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: null
    },
    info: {
        type: String
    },
    image: {
        type: String,
        default: null
    },
    store: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

Store.index({title: 'text'})
module.exports = model('Store', Store)
