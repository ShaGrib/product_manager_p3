const Product = require('../models/product.model');

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then(allProducts => {
            res.json({ results: allProducts }); 
        })
        .catch(err => res.json({ message: 'Something went wrong at find all', error: err }));
};

module.exports.findOneProduct = (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then(singleProduct => {
            res.json({ results: singleProduct });
        })
        .catch(err => res.json({ message: 'Something went wrong at find one', error: err }));
};

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then(newlyCreatedProduct => {
            res.json({ results: newlyCreatedProduct });
        })
        .catch(err => res.json({ message: 'Something went wrong at create', error: err }));
};

module.exports.updateProduct = (req, res) => {
    Product.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
        )
        .then(updatedProduct => {
            res.json({ results: updatedProduct });
        })
        .catch(err => res.json({ message: 'Something went wrong at update', error: err }));
};

module.exports.deleteProduct = (req, res) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deletedProduct => {
            res.json({ results: deletedProduct });
        })
        .catch(err => res.json({ message: 'Something went wrong at delete', error: err }));
};