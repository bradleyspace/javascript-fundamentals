const { Router } = require("express");

const router = new Router();

router.get("/up", (req, res) => {
  if (!req.thermostat) {
    res.status(500);
    res.send(JSON.stringify({ error: 500, message: "Server Error" }));
  }

  const thermostat = req.thermostat;

  thermostat.up();

  res.send(
    JSON.stringify({
      command: "up",
      temp: thermostat.getTemperature(),
      powerSavingMode: thermostat.powerSavingMode,
    })
  );
});

router.get("/down", (req, res) => {
  if (!req.thermostat) {
    res.status(500);
    res.send(JSON.stringify({ error: 500, message: "Server Error" }));
  }

  const thermostat = req.thermostat;

  thermostat.down();

  res.send(
    JSON.stringify({
      command: "down",
      temp: thermostat.getTemperature(),
      powerSavingMode: thermostat.powerSavingMode,
    })
  );
});

router.get("temperature", (req, res) => {
  if (!req.thermostat) {
    res.status(500);
    res.send(JSON.stringify({ error: 500, message: "Server Error" }));
  }

  const thermostat = req.thermostat;

  res.send(
    JSON.stringify({
      command: "temperature",
      temp: thermostat.getTemperature(),
      powerSavingMode: thermostat.powerSavingMode,
    })
  );
});

router.get("/power-saving-mode/:mode", (req, res) => {
  let mode = req.params.mode;

  if (!req.thermostat) {
    res.status(500);
    res.send(JSON.stringify({ error: 500, message: "Server Error" }));
  }

  const thermostat = req.thermostat;

  mode = mode == "on" ? true : false;

  thermostat.setPowerSavingMode(mode);

  res.send(
    JSON.stringify({
      command: "setPowerSavingMode",
      temp: thermostat.getTemperature(),
      powerSavingMode: thermostat.powerSavingMode,
    })
  );
});

module.exports = { router };
