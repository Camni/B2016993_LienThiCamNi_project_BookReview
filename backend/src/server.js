const express = require('express')
const cors = require('cors');
const db = require('./config/db');
const app = express();
const port = 2903;
const route =require('./routes/index')

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))

db.connect();

route(app);

app.listen(port,() =>{
    console.log(`Example app listening on port ${port}`);
})

module.exports = app;