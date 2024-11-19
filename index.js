const userInputString = prompt(
  "Please enter some froyo flavors separated by commas as can be seen below:",
  "strawberry,vanilla,chocolate,strawberry,vanilla,peanut,chocolate"
);

const stringArray = userInputString.split(",");

console.log(stringArray);

function flavorsV1(array) {
  const numFlavors = {};
  for (let i = 0; i < array.length; i++) {
    numFlavors[array[i]] = 0;
  }
  for (const key in numFlavors) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
      if (key === array[i]) {
        counter++;
      }
    }
    numFlavors[key] = counter;
  }
  return numFlavors;
}

function flavorsV2(array) {
  const numFlavors = {};
  for (let i = 0; i < array.length; i++) {
    const flavor = array[i].trim();
    if (numFlavors[flavor]) {
      numFlavors[flavor]++;
    } else {
      numFlavors[flavor] = 1;
    }
  }
  return numFlavors;
}

const numOfFlavorsV1 = flavorsV1(stringArray);
console.log(numOfFlavorsV1);

const numOfFlavorsV2 = flavorsV2(stringArray);
console.log(numOfFlavorsV2);
