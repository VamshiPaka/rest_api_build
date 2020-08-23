const express=require('express');

const app = express();


//Middlewares(functions that are executed when a specific route is hit)
app.use('/products',()=>{
    console.log('This is a middleware running when products route is hit');
})



//Routes
app.get('/',(req,res)=>{
    res.send('This is home route');
})

app.get('/products',(req,res)=>{
    res.send('This is products route');
})



//Listening on port to start the server

app.listen(3000);