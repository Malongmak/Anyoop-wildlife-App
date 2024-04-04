const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const wildlifeRoutes = require('./routes/wildlife');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use('/api/wildlife', wildlifeRoutes);

mongoose.connect('mongodb://localhost:27017/wildlife', { useNewUrlParser: true, useUnifiedTopology: true });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
