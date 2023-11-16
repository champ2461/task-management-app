const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const taskRoutes = require('./taskRoutes');

const app = express();
//app.use(bodyParser.json());

app.use(cors());

app.use(express.json());


mongoose.connect('mongodb://localhost:27017/task-management', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Use task routes
app.use('/tasks', taskRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
