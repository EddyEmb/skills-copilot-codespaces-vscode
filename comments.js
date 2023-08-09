// Create web server 

// Import dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// Import config
const config = require('./config/config');

// Import routes
const commentsRoutes = require('./routes/comments.routes');

// Create app
const app = express();

// Use dependencies
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

// Use routes
app.use(commentsRoutes);

// Listen on port
app.listen(config.port, () => {
    console.log(`Server started on port ${config.port}`);
});