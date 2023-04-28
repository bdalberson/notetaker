const express = require('express');
const fs = require('fs');
const app = express();
const path = require("path");
const port = process.env.PORT || 3001
const util = require('util');
const db = path.join(__dirname, 'db/db.json');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"))

const uuid = require('./helpers/uuid');




app.get('/index', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);



app.get('/api/notes',(req,res) => {
  fs.readFile("./db/db.json", "utf-8", (err,data)=>{
      if (err){console.log(err)}
      else{
          res.send(data)
      } 
      })  
})

app.post('/api/notes', (req, res) => {
  const { title, content } = req.body;


  const newNote = {
    title, 
    text: content,
    id: uuid()
  }

  saveNote(newNote)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
});

const saveNote = (note) => {
  const existingNotes = JSON.parse(fs.readFileSync(db));
  existingNotes.push(note);
  fs.writeFileSync(db, JSON.stringify(existingNotes));

  // Return a promise that resolves when the note has been saved
  return Promise.resolve();
};

app.listen(port, () =>
  console.info(`Example app listening at http://localhost:${port} 🚀`)
);
