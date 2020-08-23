const express=require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('WE ARE ON PRODUCTS PAGE');
});

router.get('/product1',(req,res)=>{
    res.send('WE ARE ON PRODUCT 1  PAGE');
});

module.exports=router;