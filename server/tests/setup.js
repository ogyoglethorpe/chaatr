const mongoose = require('mongoose');
require('dotenv').config();

before(async () => {
    await mongoose.connect(process.env.TEST_DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
});

after(async () => {
    await mongoose.connection.close();
});