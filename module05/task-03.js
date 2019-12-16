class Storage {
	constructor(items) {
		this._items = items;
	}

	get items() {
		return this._items;
	}

	set items(item) {
		this._items.push(item);
	}

	removeItem(item) {
		//check if present in arr
		const isPresent = this._items.includes(item);
		if (isPresent) {
			//search item by index
			const itemIndex = this._items.indexOf(item);
			//remove item from arr
			this._items.splice(itemIndex, 1);
		} else {
			console.log("Item is not present in storage");
		}
	}
}

const storage = new Storage([
	"Нанитоиды",
	"Пролонгер",
	"Железные жупи",
	"Антигравитатор"
]);

console.log(storage.items); // recieve list of items

storage.items = "Дроид"; //push new item to array
console.log(storage.items);

storage.removeItem("Антигравитаторss");
console.log(storage.items);
console.dir(storage);
