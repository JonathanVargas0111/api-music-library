const express = require("express")
const router = express.Router()
const uploadMiddleware = require("../utils/handleStorage") 
const {getItems,getItem,createItem} = require("../controllers/storage")



router.get("/",getItems)
router.post("/",uploadMiddleware.single("myfile"),createItem)



module.exports = router