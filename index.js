const userInputString = prompt(
    "Please enter some froyo flavors separated by commas as can be seen below:",
    "strawberry,vanilla,chocolate,strawberry,vanilla,peanut,chocolate"
);

const stringArray = userInputString.split(",");

console.log(stringArray)

function flavors (array) {
    const numFlavors = {};
    for (let i = 0; i < array.length; i++) {
        numFlavors[array[i]] = 0;
    }
    for (const key in numFlavors) {
        let counter = 0;
        for (let i = 0; i < array.length; i++) {
            if (key === array[i]) {
                counter++
            }
        }
        numFlavors[key] = counter;
    }
    return numFlavors;
}

const numOfFlavors = flavors(stringArray);

console.log(numOfFlavors);