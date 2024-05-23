const path = require("path");
const express = require("express");
const morgan = require("morgan");
const app = express();
const { getDb } = require('./db/client');

// Logging middleware
app.use(morgan("dev"));

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../dist')))

app.get("/test", (req, res, next) => {
  res.send("Test route");
});

// app.get('/', (req, res, next) => {
//   res.sendFile(path.join(__dirname, '../dist/index.html'));
// })

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



//COLLECTIONS 
app.get('/api/css', async (req, res) => {
    try {
      const db = await getDb();
      let request = await db.collection("CSS");
      const css = await request.find({}).toArray();
      res.status(200).json(css);

    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not fetch the documents' });
    }
  });

  app.get('/api/html', async (req, res) => {
    try {
      const db = await getDb();
      let request = await db.collection("HTML");
      const html = await request.find({}).toArray();
      res.status(200).json(html);
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not fetch the documents' });
    }
  });


  app.get('/api/javascript', async (req, res) => {
    try {
      const db = await getDb();
      let request = await db.collection("JavaScript");
      const javascript = await request.find({}).toArray();
      res.status(200).json(javascript);
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not fetch the documents' });
    }
  });


  app.get('/api/advancedjs', async (req, res) => {
    try {
      const db = await getDb();
      let request = await db.collection("AdvancedJS");
      const advancedjs = await request.find({}).toArray();
      res.status(200).json(advancedjs);
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not fetch the documents' });
    }
  });

  app.get('/api/womenincs', async (req, res) => {
    try {
      const db = await getDb();
      let request = await db.collection("WomenInCS");
      const womenincs = await request.find({}).toArray();
      res.status(200).json(womenincs);
      
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Could not fetch the documents' });
    }
  });




// 404 handler
//this needs to be at the end. This should only execute after nothing matches with the routes defined above. 
// app.get('*', (req, res) => {
//     res.status(404).send({
//         error: '404 - Not Found',
//         message: 'No route found for the requested URL',
//     });
// });


// Catch-all route to serve React app
//ensures that all requests not handled by previous routes are directed to 
//your React application's index.html file.
//React Router then takes over from there, interpreting the route and rendering the appropriate component on the client side.


// * Handles all URLs (wildcard).
app.get('*', (req, res) => { 
  res.sendFile(path.join(__dirname, '../dist', 'index.html'));
});





module.exports = app;