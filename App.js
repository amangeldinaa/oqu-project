const express = require('express');
const databaseConnect = require('./database/database.js');
const router = require('./router'); 
const cors = require('cors');
require("dotenv").config();

const app = express();
whitelist = ["0.0.0.0"]; //connect to front
var corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(null, false);
        }
    },
    methods: ['GET', 'PUT', 'POST', 'DELETE', 'OPTIONS'],
    optionsSuccessStatus: 200,
    credentials: true,
    allowedHeaders: [
        'Content-Type',
        'Authorization',
        'X-Requested-With',
        'device-remember-token',
        'Access-Control-Allow-Origin',
        'Origin',
        'Accept'
    ]
};

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use('/api', router)

app.use(cors({
    origin: 'http://localhost:3000/'
}))
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server started!');
});

databaseConnect()

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("build"));
//     app.get("*", (req, res) => {
//       res.sendFile(path.resolve(__dirname,  "build", "index.html"));
//     });
//   }