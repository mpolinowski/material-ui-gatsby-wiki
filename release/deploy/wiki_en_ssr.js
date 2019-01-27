const express = require("express");
const compression = require("compression");
const path = require('path');
const bodyParser = require('body-parser');
const logger = require('morgan');
const helmet = require('helmet');

const app = express();

// Express routers
const searchRouter = require('./routes/searchRoutes');
const indexPHPRouter = require('./routes/indexPHPRoutes');
const qnaRouter = require('./routes/qnaRoutes.js');


// compress all responses
app.use(compression());
// Express.js security with HTTP headers.
app.use(helmet());


// morgan logger
app.use(logger('tiny'));

// EJS Templating Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

// public folder for Gatsby content
app.use(express.static(path.join(__dirname, 'app')));
app.use(express.static(path.join(__dirname, 'downloads')));

// Use Express for those routes
app.use('/Search/', searchRouter);
app.use('/index.php/', indexPHPRouter);
app.use('/Fragen_und_Antworten/', qnaRouter);


// Error handlers

// 404
app.use(function (req, res, next) {
  res.status(404).redirect('/');
});

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
    });
  });
}

// Production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
  });
});

app.listen(7777, () => console.log("express-gatsby-static listening on http://localhost:7777"));


module.exports = app;