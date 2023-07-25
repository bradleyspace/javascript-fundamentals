const express = require("express");
const { router: weatherRouter } = require("./routes/thermostat");
const thermostatMiddleware = require("./middleware/thermostat");

const app = express();
const port = process.env.PORT || 5000;

app.set("view engine", "ejs");

app.use(thermostatMiddleware);
app.use("/thermostat", weatherRouter);

app.get("/", (req, res) => {
  const thermostat = req.thermostat;

  return res.render("pages/index", { thermostat });
});

app.listen(port, () => {
  console.log(`Listening on ${port}!`);
});
