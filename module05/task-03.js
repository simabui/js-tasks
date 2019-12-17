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
    this._items = this._items.filter(i => i !== item);
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

storage.removeItem("Антигравитатор");
console.log(storage.items);
