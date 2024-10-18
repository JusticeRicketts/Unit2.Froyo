const userInputString = prompt("list of comma-separated froyo flavors", "");
const flavors = userInputString.split(",");

function getFlavors(flavors) {
  const count = {};

  for (const element of flavors) {
    if (count[element]) {
      count[element] += 1;
    } else {
      count[element] = 1;
    }
  }
  return count;
}

console.log(getFlavors(flavors));
