const express = require('express');
const mysql = require('mysql');

const router = express.Router();



const pool =mysql.createPool({
    connectionLimit:10,
    host:"localhost",
    user:"root",
    database:"esprit"


})


function getConnection(){
    return pool;
}

// create login router 



// create register router 

// create ajouter cours 

// create ajouter exercice 

 // create ajouter commentaire

 





module.exports = router;