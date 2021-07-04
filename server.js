const bodyParser = require('body-parser');
const express = require('express');
const useRoutes = require('./routes/useRoutes');
// const mongoose= require('mongoose');
// const url = "mongodb+srv:/tuanvo:Tuanvo103>@newcluster.vqa57.mongodb.net/dbapiThemSuaXoa?retryWrites=true&w=majority"
const cors = require('cors');

require('dotenv').config();

const app = express();

const port = process.env.APP_PORT || 5000;
const host = process.env.APP_HOST;

// mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true});
const mongoose = require('./db')();
const db = mongoose.connection;
db.once('open', function() {
    console.log("Open MongoDB")
})
app.use(cors())

//??
app.use(bodyParser.json());

app.use('/', useRoutes);

//??
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.listen(port, () => {
    console.log(`Server is running on port ${host}:${port}`);
});