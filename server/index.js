const express = require('express');
const app = express();
const PORT = 3000
const cors = require('cors');
const router = require('./api/index.js');
const mongoose = require('mongoose');


const conn_str = 'mongodb+srv://csv:csv@cluster0.sjlccii.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(
    conn_str,
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }
).then(() => console.log('Connected successfully'))
.catch((err) => {console.log(err)})


app.use(cors());
app.use(express.json())
app.use('/api', router);
app.listen(PORT, function() {
    console.log(`App listeng on ${PORT}`);
})
