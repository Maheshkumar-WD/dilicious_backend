let express = require("express");
const { categoryController } = require("../controllers/category.controller");

let categoryRoute = express.Router();

categoryRoute.post("/add",categoryController.postCategory);
categoryRoute.get("/getcategory",categoryController.getCategory);

module.exports = {categoryRoute};
