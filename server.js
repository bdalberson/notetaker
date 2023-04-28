const express = require('express');  //runs the express function
const fs = require('fs'); //needed for saving the db file locally
const util = require('util'); //unused but helps with file saving functionality
const path = require("path"); //needed for app to work


const app = express(); //runs the express function
const port = process.env.PORT || 3001 //sets the port for the server to run on
const db = path.join(__dirname, 'db/db.json'); //path to the "database"
app.use(express.urlencoded({ extended: true })); //does some kind of url thing
app.use(express.json()); //needed to manage json
app.use(express.static("public")) //needed for servers to run

const uuid = require('./helpers/uuid'); //uuid for making unique ID to delete notes. 



//route for the /notes route.  listens to sends users the correct  files

app.get('/api/notes', (req, res) => {      
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) { console.log(err) }
    else {
      res.send(data)
    }
  })
})

 //route for notes for when recreating a new note,  adds in the title, text and adds a new UUID and saves it to the json Database
app.post('/api/notes', (req, res) => {
  const { title, text } = req.body;

  const newNote = {
    title,
    text,
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

app.delete('/api/notes/${id}', (req, res)=> {
  // read the notes, parse them, filter the notes and take out the note by its id. then write the notes to the json 
  const existingNotes = JSON.parse(fs.readFileSync(db));
  // use a functional loop (filter)
  //dunno if I will have time to finish this tonight
})

//sends user to the notes.html file when a get /notes is heard on the server
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

//wildcardd route for everything that isn't notes. 
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//goes and writes the notes data to the db.json file 
const saveNote = (note) => {
  const existingNotes = JSON.parse(fs.readFileSync(db));
  existingNotes.push(note);
  fs.writeFileSync(db, JSON.stringify(existingNotes));

  // Return a promise that resolves when the note has been saved
  return Promise.resolve();
};

//just tells the app where to listen to for insturctions. 
app.listen(port, () =>
  console.info(`Example app listening at http://localhost:${port} 🚀`)
);
