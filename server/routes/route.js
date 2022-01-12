import Express  from "express";
const router = Express.Router();

import { createItem,getItems } from '../controller/itemController.js'

// console.log("rout.js")
router.post('/createItem',createItem);
router.get('/getItems',getItems)
export default router;