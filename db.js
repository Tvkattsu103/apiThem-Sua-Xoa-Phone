const mongoose = require('mongoose');

module.exports = function () {
    const connectStr = process.env.DB_CONNECT_STRING;
    mongoose.connect(connectStr, {useUnifiedTopology: true, useNewUrlParser: true});
    return mongoose;
}
