// 3rd party modules
require(`dotenv`).config();
const express = require(`express`);
const path = require(`path`);
const favicon = require(`serve-favicon`);
const logger = require(`morgan`);
const cookieParser = require(`cookie-parser`);
const bodyParser = require(`body-parser`);
// const mongoose = require(`mongoose`); // uncomment for mongoose

// my modules
const config = require(`./config/config.js`);
const index = require(`./routes/index`);
const users = require(`./routes/users`);

// connect to database
// uncomment for mongoose
// mongoose.Promise = global.Promise;
// mongoose.connect(`${config.dbProtocol}${config.dbUser}:${config.dbPass}@${config.dbHost}:${config.dbPort}/${config.dbName}`, (err, database) => {
//   db = database;
//   return err ? console.log(err) : console.log(`connected to ${db}`)
// });

const app = express();

// view engine setup
app.set(`views`, path.join(__dirname, `views`));
app.set(`view engine`, `hbs`);

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, `public`, `favicon.ico`)));
app.use(logger(`dev`)); // this is to help with logging
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser()); //helps you do stuff across sessions
app.use(express.static(path.join(__dirname, `public`)));

app.use(`/`, index);
app.use(`/users`, users);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  let err = new Error(`Not Found`);
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get(`env`) === `development` ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render(`error`);
});

module.exports = app;
