const express = require("express")
const mongoose = require("mongoose")
const bodyParser=require("body-parser");
const cors = require("cors");
const url = 'mongodb://localhost:27017/Shopping';
const bcrypt = require('bcryptjs')


const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.json());
app.use(cors());
// app.use((req,res, next) => {
//   next(createHttpError.NotFound());
// });

//Routes
app.use('/products', require("./routes/productsRoute"));
app.use('/users', require("./routes/usersRoute"));
app.use('/auth', require("./routes/authRoute"));


//mongo connection
mongoose.connect(url, {useNewUrlParser:true})
const conn = mongoose.connection
conn.on('open', () => {
  console.log('Database Connected..')
})
mongoose.Promise = global.Promise;

//calling server
app.listen(3001, () => {
  console.log("Server started")
})

