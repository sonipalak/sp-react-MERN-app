const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
//const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"
const mongoURI = "mongodb://localhost:27017/sp-react-mern-app?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully By Palak");
    })
}

module.exports = connectToMongo;