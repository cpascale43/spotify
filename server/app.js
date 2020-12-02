const createError = require("http-errors");
const path = require("path");
const express = require("express");
const { join } = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");

const indexRouter = require("./routes/api");
const allowedOrigins = [
  "http://localhost:3000",
  "https://accounts.spotify.com",
  "https://api.spotify.com",
];

const { json, urlencoded } = express;

var app = express();
app.set("port", process.env.PORT || 3000);

app.use(logger("dev"));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, "public"))).use(cookieParser());

// api routes
app.use("/api", indexRouter);

// static file-serving middleware
app.use(express.static(path.join(__dirname, "..", "public")));

// sends index.html
app.use("*", (req, res) => {
  console.log("hi", req.body);
  console.log(path.join(__dirname, "..", "public/index.html"));
  res.sendFile(path.join(__dirname, "..", "public/index.html"));
});

// catch 404 and forward to error handler
app.use(function (err, req, res, next) {
  console.error(err);
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({ error: err });
});

app.listen(app.get("port"), function () {
  console.log("Node app is running on port", app.get("port"));
});

module.exports = app;
