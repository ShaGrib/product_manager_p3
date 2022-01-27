const ProductController = require("../controllers/product.controller");
const Product = require("../models/product.model");

module.exports = (app)=>{
    app.get("/api/products", ProductController.findAllProducts);

    app.post("/api/products", ProductController.createNewProduct);

    app.get("/api/products/:id", ProductController.findOneProduct);

    app.put("/api/products/update/:id", ProductController.updateProduct);

    app.delete("/api/products/delete/:id", ProductController.deleteProduct);
};