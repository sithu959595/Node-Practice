const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");
const exp = require("constants");
const app = express();
const expressHbs = require("express-handlebars");
const noPageController = require("./controllers/404.js");

// const requestHandler = require("./routes");
// const server = http.createServer(requestHandler);
// app.engine(
//   "handlebars",
//   expressHbs({
//     extname: "handlebars",
//     defaultLayout: "main-layout",
//     layoutsDir: "views/layouts/",
//   })
// );
app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminData.routes);

app.use(shopRoutes);

app.use(noPageController);
// app.use((req, res, next) => {
//   console.log("in the middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("in another middleware");

//   // res.send("<h1>Hello </h1>");
//   next();
// });

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);
