import express from "express";
import { readdirSync } from "fs";
import cors from "cors";
import mongoose from 'mongoose'
const morgan = require("morgan");
require('dotenv').config();


const app = express();

const URI = process.env.DATABASE;
// db connection
mongoose
.connect(URI, {
   useNewUrlParser: true, 
   useUnifiedTopology: true
})
.then(() => console.log("DB Connected"))
.catch((err) => console.log("DB Connection Error: ", err));

// middleware
app.use(cors());
app.use(morgan("dev"));

// route middleware
readdirSync("./routes").map((r) => app.use("/api", require(`./routes/${r}`)));

const port = process.env.PORT || 8000;
app.listen(port,() => console.log('Server is running'));