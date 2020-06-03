const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL, {
// mongoose.connect('mongodb://localhost/mood-tracker', {
  useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  }, function(err){console.log(err)});

const db = mongoose.connection;

db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}: ${db.port}`)
});
db.on('error', (err) => {
  console.log(err)
  })
