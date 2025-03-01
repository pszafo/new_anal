const express = require('express');
const searchRouter = require('./routes/search');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const dashboardRouter = require('./routes/dashboard');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
  // app.use('/api/search', searchRouter);
app.use(cors());
app.use(bodyParser.json());
app.use('/api', dashboardRouter);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/public')));

// The "catchall" handler: for any request that doesn't match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
