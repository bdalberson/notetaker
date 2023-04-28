# notetaker


| Technology Used         | Resource URL           | 
| ------------- |:-------------:| 
| Git | [https://git-scm.com/](https://git-scm.com/)     |    
| JavaScript | [https://developer.mozilla.org/en-US/docs/Web/JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)     
| Node.JS| [https://developer.mozilla.org/en-US/docs/Glossary/Node.js?utm_source=wordpress%20blog&utm_medium=content%20link&utm_campaign=promote%20mdn](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)    
| Heroku |:https://id.heroku.com/:| 
| UUID |:https://www.npmjs.com/package/uuid:| 

## Description 
[Visit the Deployed Site](https://guarded-depths-68124.herokuapp.com/)

This is a note taking app.  This will allow you to create sticky notes for saving and keeping track of tasks.  Hope you find it useful. 



## Code Refactor Example


Below is the route for notes for when recreating a new note, adds in the title, text and adds a new UUID and saves it to the json Database 

```node.js



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


Below is notes note for displaying the db text on the screen
``` JavaScript

app.get('/api/notes', (req, res) => {      
  fs.readFile("./db/db.json", "utf-8", (err, data) => {
    if (err) { console.log(err) }
    else {
      res.send(data)
    }
  })
})


Blow is the code for writing to the file. I believe I could have used to util function to handle the promise callback actions but I couldn't figure it out.

``` Javascript


const saveNote = (note) => {
  const existingNotes = JSON.parse(fs.readFileSync(db));
  existingNotes.push(note);
  fs.writeFileSync(db, JSON.stringify(existingNotes));

  // Return a promise that resolves when the note has been saved
  return Promise.resolve();
};



## Usage 

This is a fully deployed app running on Heroku.  All you need to do is go to  https://guarded-depths-68124.herokuapp.com/ and see for yourself.😈  


## Learning Points 


OH EM GEE.  This was so hard to get running and off the ground.  So many times I was just staring at a blank page unsure of where to get BEGIN so getting to this point gives me some confidence going forward.  First time deploying to Heroku!  I'm an app launcher now.  I struggled a lot trying to get the app(re,res) syntax down.  I'm still struggling to understand when and why to stringify things or parse them and a lot of the writing functions. 


## Author Info

SWEngineer from CA, I love videogames, music and family lol. 

* [Portfolio](https://bdalberson.github.io/Course2Biopage/)
* [LinkedIn](https://www.linkedin.com/in/brian-alberson-swe/)
* [Github](https://github.com/bdalberson)
```

## Credits

Study groups, TAs, and tutoring all crucial here. Also thanks to the family for keeping me sane and doing the dishes. 

---

## Tests
Didn't write any this time.