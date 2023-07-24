const { Thermostat } = require("../src/thermostat");

describe("Thermostat", () => {
    it("Should initialize with a temp of 20 and PSM enabled", () => {
        let thermostat = new Thermostat();
        expect(thermostat.powerSavingMode).toBeTruthy();
        expect(thermostat.getTemperature()).toEqual(20);
    })

    it("Should increase and decrease by one when respective methods are called", () => {
        let thermostat = new Thermostat();
        thermostat.up();
        expect(thermostat.getTemperature()).toEqual(21);
        thermostat.down();
        expect(thermostat.getTemperature()).toEqual(20);
    })

    it("Should be limited at 25C when PSM is enabled", () => {
        let thermostat = new Thermostat();
        
        for (let i = 0; i < 10; i++)
            // increase 10 times
            thermostat.up();
        
        expect(thermostat.getTemperature()).toEqual(25);
    })

    it("Should disable and enable PSM when the function is called", () => {
        let thermostat = new Thermostat();

        thermostat.setPowerSavingMode(false);
        expect(thermostat.powerSavingMode).toBeFalsy();
        thermostat.setPowerSavingMode(true);
        expect(thermostat.powerSavingMode).toBeTruthy();
    })

    it("Should be able to go above 25C when PSM is disabled", () => {
        let thermostat = new Thermostat();
        thermostat.setPowerSavingMode(false);

        for (let i = 0; i < 10; i++)
            thermostat.up();
        
        expect(thermostat.getTemperature()).toEqual(30);
    })

    it("Should not be able to go below 10C under any circumstances", () => {
        let thermostat = new Thermostat();
        
        for (let i = 0; i < 20; i++)
            // decrease 20 times
            thermostat.down();
        
        expect(thermostat.getTemperature()).toEqual(10);
    })
})