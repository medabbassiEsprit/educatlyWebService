const express = require('express');
const mysql = require('mysql');

const router = express.Router();



const pool =mysql.createPool({
    connectionLimit:10,
    host:"localhost",
    user:"root",
    database:"educatly"


})


function getConnection(){
    return pool;
}


// create login router 
router.get("/Login/:login/:password", (req, res) => {
    pool.query("SELECT * FROM `users` where username = ? and password =? ",[
            req.params.login,
            req.params.password
    ],
   (err, rows, fields) => {
        if (rows >=1 ) {
            res.status(200)
            res.json({message:"succes"})
            res.send(rows)  
        } else{
            res.json({message:"failure",body:"wrong password or username"})
        }
      
    })
})


// create register router 


// create ajouter cours 



// create ajouter exercice 

 // create ajouter commentaire

 





module.exports = router;
