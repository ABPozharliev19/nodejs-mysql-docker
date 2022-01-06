const express = require('express');
const mysql = require("mysql2")
const app = express();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: 3306
});

connection.connect((err) => {
    if(err) {
        console.log(err);
        return;
    }
    console.log("POOOOG");
})

const PORT = process.env.PORT || 4000;

app.get('/', (req, res) => {
    res.send("kekw");
});

app.listen(PORT, () => {
    console.log("kekw3");
});