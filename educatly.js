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
router.post("/register/:nom/:prenom/:username/:email/:password/:role", (req, res) => {
    pool.query("INSERT INTO `users`( `nom`, `prenom`, `username`, `email`, `password`, `role`) VALUES (?,?,?,?,?,?) ",[
            req.params.nom,
            req.params.prenom,
            req.params.username,
            req.params.email,
            req.params.password,
            req.params.role,

    ],
   (err, rows, fields) => {
        if (rows >=1 ) {
            res.status(200)
            res.json({message:"succes"})
            res.send(rows)  
        } else{
            res.json({message:"failure",body:"missing arguments"})
        }
      
    })
})
// create ajouter cours 
router.post("/addCours/:titre/:contenu/:type_cours/:id_createur/:id_categories", (req, res) => {
    pool.query("INSERT INTO `cours`(`titre`, `contenu`, `type_cours`, `id_createur`, `id_categories`)VALUES (?,?,?,?,?) ",[
            req.params.titre,
            req.params.contenu,
            req.params.type_cours,
            req.params.id_createur,
            req.params.id_categories,

    ],
   (err, rows, fields) => {
        if (rows >=1 ) {
            res.status(200)
            res.json({message:"succes"})
            res.send(rows)  
        } else{
            res.json({message:"failure",body:"missing arguments"})
        }
      
    })
})
// getCours by id createur
router.get("/getCourses/:id/", (req, res) => {
    pool.query("SELECT * FROM `cours` where id_createur = ? ",[
            req.params.id,
           
    ],
   (err, rows, fields) => {
        if (rows >=1 ) {
            res.status(200)
            res.json({message:"succes",rows})
            
        } else{
            res.json({message:"failure",body:"wrong parametres"})
        }
      
    })
})



//get Cours by id categories
router.get("/getCoursesCategorie/:id/", (req, res) => {
    pool.query("SELECT * FROM `cours` where id_categories = ? ",[
            req.params.id,
           
    ],
   (err, rows, fields) => {
        if (rows >=1 ) {
            res.status(200)
            res.json({message:"succes",rows})
            
        } else{
            res.json({message:"failure",body:"wrong parametres"})
        }
      
    })
})
// create ajouter exercice 
router.post("/addExerice/:titreExercice/:contenu/:solution/:solutionDeux", (req, res) => {
    pool.query("INSERT INTO `exercice`(`titreExercice`, `contenu`, `solution`, `solutionDeux`) VALUES (?,?,?,?) ",[
            req.params.titreExercice,
            req.params.contenu,
            req.params.solution,
            req.params.solutionDeux,
           

    ],
   (err, rows, fields) => {
        if (rows >=1 ) {
            res.status(200)
            res.json({message:"succes"})
            res.send(rows)  
        } else{
            res.json({message:"failure",body:"missing arguments"})
        }
      
    })
})

 // create ajouter commentaire
 router.post("/addCmnt/:contenu/:id_exercice/:id_user", (req, res) => {
    pool.query("INSERT INTO `commentaire`(`contenu`, `id_exercice`, `id_user`) VALUES (?,?,?) ",[
        
            req.params.contenu,
            req.params.id_exercice,
            req.params.id_user,
           

    ],
   (err, rows, fields) => {
        if (rows >= 1 ) {
            res.status(200)
            res.json({message:"succes"})
            res.send(rows)  
        } else{
            res.json({message:"failure",body:"missing arguments"})
        }
      
    })
})
 





module.exports = router;