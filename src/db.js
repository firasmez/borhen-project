const mongoose = require('mongoose');

console.log(process.env.DB_PASSWORD, 'DB PASSWORD');

const databaseUrl = `mongodb+srv://foumez:${process.env.DB_PASSWORD}@myfirstdb.zitbopg.mongodb.net/?retryWrites=true&w=majority`;


mongoose.connect(databaseUrl).catch((err) => {
  console.log(err);
});