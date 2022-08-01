const mongoose = require ('mongoose');

const connectToDatabase = async () => {
    await mongoose.connect('mongodb://localhost:27017/library', {family:4})
    .then(() => {
        console.log("successfully connected");
    })
    .catch((error) => {
        console.log("Database connection failed");
        console.error(error);
        process.exit(1);
    });
}

module.exports = connectToDatabase;