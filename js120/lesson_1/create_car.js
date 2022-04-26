function createCar(make, fuel, engine) {
  return {
  "make": make,
  fuelLevel: fuel,
  engineOn: engine,
    startEngine() {
      this.engineOn = true;
    },
    drive() {
      this.fuelLevel -= 0.1;
    },
    stopEngine() {
      this.engineOn = false;
    },
    refuel(percent) {
      if ((this.fuelLevel + (percent / 100)) <= 1) {
        this.fuelLevel += (percent / 100);
      } else {
        this.fuelLevel = 1;
      }
    },
  };
}

let jag = createCar("Jaguar", 0.4, "off");
console.log(jag);