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


router.post("/create/:status/:name",(req,res)=>{

    console.log(req.params);
pool.query("INSERT INTO `task`(`status`,`name`) VALUES (?,?)",
[
    req.params.status,
    req.params.name],
    (err,user_rows,fields)=>{

res.status(200);
res.json(user_rows)

});
})
// 

router.get("/get", (req, res) => {
    pool.query("SELECT * FROM `task` ",
   (err, rows, fields) => {
        res.status(200)
       res.send(rows)
    })
})



module.exports = router;