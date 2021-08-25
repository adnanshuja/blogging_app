const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const cors = require("cors");
const routes = require("./routes/index");
const runMig = require("./initialize");
const hostname = "0.0.0.0";
const port = 3001;

const app = express();
app.use(cors());
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





