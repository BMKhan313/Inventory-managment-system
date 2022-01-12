import Express  from "express";
import cors from 'cors'
import bodyParser from 'body-parser'
import connection from "./database/db.js";

import router from './routes/route.js'
const app = Express()



app.use(cors());
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',router)

const PORT = 8000;
app.listen(PORT,()=>console.log(`server is runing on ${PORT}`))

connection();