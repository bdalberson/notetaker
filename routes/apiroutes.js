const util = require("util")

const fs = require('fs')

const db = require('../db/db.json')

const router = require('express').Router()
const readFromFile = util.promisify(fs.readFile);


router.get('/notes',(req,res) => {
    fs.readFile("../db/db.json", "utf-8", (err,data)=>{
        if (err){console.log(err)}
        else{
            res.send(data)
        } 
        })
    // .then((data) => res.json((data)))
    
})


module.exports = router