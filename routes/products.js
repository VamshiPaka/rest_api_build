const express = require('express');
const router = express.Router();

const Product = require('../models/product');

// gets all the list of the products
router.get('/', async (req, res) => {
	try {
		// res.send('list of products');
		const products = await Product.find();
		res.json(products);
	} catch (err) {
		res.json({ message: err });
	}
});
//to get a single product
router.get('/:productid', async (req, res) => {
	try {
		const product = await Product.findById(req.params.productid);
		res.json(product);
	} catch (err) {
		res.json({ message: err });
	}
});

//adds a product
router.post('/', async (req, res) => {
	const product = new Product({
		product_name: req.body.product_name,
		product_desc: req.body.product_desc,
		product_price: req.body.product_price,
		product_category: req.body.product_category
	});
	//save to database
	try {
		const savedProduct = await product.save();
		res.json(savedProduct);
	} catch (err) {
		res.json({ message: err });
	}
});

//delete a specific post

router.delete('/:productid', async (req, res) => {
	try {
		const removeProduct = await Product.remove({ _id: req.params.productid });
		res.json(removeProduct);
	} catch (err) {
		res.json({ messsage: err });
	}
});

//Update a Product

router.patch('/:productid', async (req, res) => {
	try {
		const updatedPost = await Product.updateOne(
			{ _id: req.params.productid },
			{ $set: { product_name: req.body.product_name } }
		);
		res.json(updatedPost);
	} catch (err) {
		res.json({ message: err });
	}
});

module.exports = router;
