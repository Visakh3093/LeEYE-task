// route.js
const express = require("express");
const controller = require("../controller/controller");
const multer = require("../multter/multer")
const router = express.Router();

// GET Method
router.get('/',controller.loadProduct)
router.get('/addProduct',controller.loadAddProduct)
router.get('/editproduct',controller.loadEditProduct)
router.get('/dltProduct',controller.deleteProduct)

// POST Method

router.post('/addProduct', multer.upload.array("image"), controller.addProduct);
router.post('/editProduct', multer.upload.array("image"), controller.editProduct);


module.exports = router;
