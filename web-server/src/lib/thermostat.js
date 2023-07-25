class Thermostat {
  constructor() {
    this.temp = 20;
    this.powerSavingMode = true;
  }

  up() {
    if (this.temp >= 25 && this.powerSavingMode) return;

    this.temp++;
  }

  down() {
    if (this.temp <= 10) return;

    this.temp--;
  }

  getTemperature() {
    return this.temp;
  }

  setPowerSavingMode(mode) {
    this.powerSavingMode = mode;

    if (mode && this.temp > 25) {
      this.temp = 25;
    }
  }
}

module.exports = {
  Thermostat,
};
