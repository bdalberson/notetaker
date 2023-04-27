const express = require('express');
const fs = require('fs');
const app = express();
const path = require("path");
const port = process.env.PORT || 3001
const api = require('./routes/apiroutes.js');
const util = require('util');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// const uuid = require('./helpers/uuid');




app.get('/index', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.post("/api/notes/id"), (req,res) => {
  const newNote = req.body;
  readFile("db")
  noteList.push(newNote)
  res.json(newNote)
}

app.listen(port, () =>
  console.info(`Example app listening at http://localhost:${port} 🚀`)
);