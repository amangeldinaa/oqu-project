const mongoose = require ('mongoose');

const connectToDatabase = async () => {
    await mongoose.connect('mongodb+srv://aruzhan-amangeldina:6916qwopzxnm@oqu-project.kzzew.mongodb.net/library')
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