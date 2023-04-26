const { readFile } = require('fs')

const router = require('express').Router()

router.get('/notes',(req,res) => {
    readFile("../db/db.json","utf8")
})