// Direct usage
const obj1 = {
  [Symbol.toStringTag]: "Nifty",
};
console.log(obj1.toString()); // "[object Nifty]"
console.log(obj1); // {Symbol(Symbol.toStringTag): "Nifty"}

// Via a prototype
const p = {
  [Symbol.toStringTag]: "Spiffy",
};
const obj2 = Object.create(p);
console.log(obj2.toString()); // "[object Spiffy]"

console.log(p.toString()); // "[object Spiffy]"
