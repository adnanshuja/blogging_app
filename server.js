const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const routes = require("./routes/index");
const runMig = require("./initialize");
const hostname = "127.0.0.1";
const port = 3000;

const app = express();
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

runMig();
app.get('/', (req, res) => {
  res.send('Hello World!')
})
routes(app);

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;





