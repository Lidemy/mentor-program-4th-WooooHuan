const fakeInput = ['3 10', '9 100', '5 60', '2 70'];
const limit = Number(fakeInput[0].split(' ')[1]);

function sumProperty(arr, prop) {
  return arr.length > 0 ? arr.map(e => e[prop]).reduce((a, b) => a + b) : 0;
}

function Item(price, weight) {
  this.price = Number(price);
  this.weight = Number(weight);
}

function Bag(items) {
  this.items = items;
  this.limit = limit;
  this.getPrice = () => sumProperty(this.items, 'price');
  this.getWeight = () => sumProperty(this.items, 'weight');
  this.isWorkable = () => this.getWeight() <= this.limit;
  this.putInItem = x => this.items.push(x);
}

function getItems(arr) {
  const items = [];
  for (let i = 1; i < arr.length; i += 1) {
    const prop = arr[i].split(' ');
    items.push(new Item(prop[1], prop[0]));
  } return items;
}

function getBags(items, index = 0, bags = []) {
  const tmpBags = [new Bag([items[index]])];
  for (let i = 0; i < bags.length; i += 1) {
    tmpBags.push(new Bag(bags[i].items.concat(tmpBags[0].items)));
  }
  const currentBags = bags.concat(tmpBags);
  if (index + 1 >= items.length) {
    return currentBags;
  } return getBags(items, index + 1, currentBags);
}

function solve(bags) {
  let result = 0;
  for (let i = 0; i < bags.length; i += 1) {
    if (bags[i].isWorkable()) result = Math.max(result, bags[i].getPrice());
  } return result;
}

function io(input) {
  const items = getItems(input);
  const bags = getBags(items);
  console.log(solve(bags));
  for (let i = 0; i < bags.length; i += 1) {
    console.log(`price : ${bags[i].getPrice()}  weight : ${bags[i].getWeight()}  workable : ${bags[i].isWorkable()}`);
  }
}

io(fakeInput);
