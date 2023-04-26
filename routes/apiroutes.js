const { readFile } = require('fs')
const db = require('../db/db.json')

const router = require('express').Router()

router.get('/notes',(req,res) => {
    console.log(res.json(readFile("../db/db.json","utf8")))
    
})

