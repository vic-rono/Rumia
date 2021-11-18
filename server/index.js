const express = require("express");
const bodyParser = require("express")
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const productsRoute = require("./routes/productsRoute");
const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute")
app.use(bodyParser.json());

dotenv.config();
app.use(express.json());

mongoose
    .connect(process.env.MONGO_URL, { 
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected");
    })
    .catch((err) => console.log(err))
    
    
    app.use('/api/products/', productsRoute);
    app.use('/api/users/', userRoute);
    app.use('/api/orders/', orderRoute)
    
    

app.listen(8000, () => {
    console.log("server is up!")
});






















// const express = require("express")
// const app = express()
// const mongoose = require("mongoose")
// const productsRoute = require('./routes/productsRoute');


// require('dotenv').config()


// app.use('/api/products/',productsRoute)


// mongoose.connect(process.env.MONGO_URL , {useNewUrlParser: true, useUnifiedTopology: true});

// mongoose.connection.on('error' , ()=>{
//     console.log('Connection failed')
// })

// mongoose.connection.on( 'connected', ()=>{
//     console.log('Connection Successful')
// })



// app.listen(5000, () => {
//     console.log('server up')
// })