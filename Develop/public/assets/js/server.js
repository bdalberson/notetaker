const express = require('express');
const fs = require('fs');
const app = express();
const port = 3001;



app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.listen(port, () =>
  console.info(`Example app listening at http://localhost:${port} 🚀`)
);