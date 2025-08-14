const express = require('express')
const dbConnect = require('./config/db');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT;





dbConnect().then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server start at PORT ${PORT}`);
        
    })
}).catch((err)=>{
    console.log("ERROR :" + err.meesage);
})
