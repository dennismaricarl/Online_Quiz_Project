const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const dbConnection = require('./db/client')

// Logging middleware
app.use(morgan("dev"));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../dist')))

app.get("/test", (req, res, next) => {
  res.send("Test route");
});

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
})

// TODO: Add your routers here

// Error handling middleware
app.use((error, req, res, next) => {
    console.error('SERVER ERROR: ', error);
    if(res.statusCode < 400) {
        res.status(500);
    }
    res.send({
        error: error.message,
        name: error.name,
        message: error.message,
        table: error.table,
    });
});

app.get('/questions', async (req, res) => {
    try {
      const collection = await dbConnection(); //b/c main is asynchronous we need to await its result
      const questions = await collection.find().toArray(); //query the result 
      console.log(questions)
      res.status(200).json(questions);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not fetch the documents' });
    }
  });


// 404 handler
//this needs to be at the end. This should only execute after nothing matches with the routes defined above. 
app.get('*', (req, res) => {
    res.status(404).send({
        error: '404 - Not Found',
        message: 'No route found for the requested URL',
    });
});
  

module.exports = app;