class Car {
	constructor({ speed = 0, price, maxSpeed, isOn = false, distance = 0 }) {
		this.speed = speed;
		this._price = price;
		this.maxSpeed = maxSpeed;
		this.isOn = isOn;
		this.distance = distance;
	}

	static getSpecs(car) {
		console.log(car); //output car specs
	}

	get price() {
		return this._price; // recieve price
	}

	set price(newPrice) {
		this._price = newPrice; //set new price
	}

	turnOn() {
		this.isOn = true; //turn engine on
	}

	turnOff() {
		this.isOn = false; //turn engine on
		this.speed = 0;
	}

	accelerate(value) {
		if (value < this.maxSpeed) {
			//accelerate cant be higher maxspeed
			this.speed += value;
		} else {
			console.log("Incorrect number");
		}
	}

	decelerate(value) {
		if (this.speed > 0) {
			//decelerate cant be lower than 0
			this.speed -= value;
		} else {
			console.log("Speed lower than zero");
		}
	}

	drive(hours) {
		// distance of car
		if (this.isOn) {
			this.distance = hours * this.speed;
		} else {
			console.log("Car engine is turned off");
		}
	}
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

Car.getSpecs(mustang); //primary specs

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang); //new specs

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang); //new specs

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
