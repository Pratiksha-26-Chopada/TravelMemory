const express = require("express");
require('dotenv').config();
const cors = require('cors');

const app = express();
PORT = process.env.PORT;
const conn = require('./conn');
const tripRoutes = require('./routes/trip.routes');

app.use(express.json());
app.use(cors());

app.use('/trip',tripRoutes);

app.get('/hello' , (req,res)=>{
    res.send('Hello World!')
})

app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`)
})