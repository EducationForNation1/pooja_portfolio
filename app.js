import express from "express";
import route from "./routes/route.js";
import connectDB from "./db/db.js";
import bodyParser from "body-parser";
import path from 'path';
import dotenv from "dotenv";
const app = express();
// const port = 3000;
// const DATABASEURL = process.env.DATABASEURL||'mongodb://127.0.0.1:27017/';
dotenv.config();
const port = process.env.PORT||3000;
const DATABASEURL = process.env.MONGO_URI;
const secret   = process.env.SECRET_KEY;


// database connection
await connectDB(DATABASEURL)

// body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// setup ejs template
app.set('views', './views');
app.set('view engine','ejs');

// setup static file
app.use(express.static(path.join(process.cwd(),'public')))

// route
app.use('/',route);

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`)
})