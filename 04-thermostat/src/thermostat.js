class Thermostat {
    constructor() {
        this.temp = 20;
        this.powerSavingMode = true;
    }

    getTemperature() {
        return this.temp;
    }

    up() {
        if (this.powerSavingMode && this.temp >= 25)
            return;
        this.temp++;
    }

    down() {
        if (this.temp <= 10) {
            return
        }
        this.temp--;
    }

    setPowerSavingMode(toggle) {
        this.powerSavingMode = toggle;

        if (toggle && this.temp > 25) {
            this.temp = 25;
        } 
    }
}

module.exports = { Thermostat }