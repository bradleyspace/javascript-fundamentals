const { Thermostat } = require("../lib/thermostat");

const thermostat = new Thermostat();

module.exports = async (req, res, next) => {
  req.thermostat = thermostat;
  next();
};
