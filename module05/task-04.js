class StringBuilder {
	constructor(value) {
		this._value = value;
	}

	get value() {
		return this._value;
	}

	append(str) {
		this._value += str; //add string to the end
	}

	prepend(str) {
		this._value = str + this._value; //add string to the start
	}

	pad(str) {
		this._value = str + this._value + str; //add string to the start and end
	}
}

const builder = new StringBuilder(".");

builder.append("^");
console.log(builder.value);

builder.prepend("^");
console.log(builder.value);

builder.pad("=");
console.log(builder.value);
