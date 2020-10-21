//This file creats an array, and uses a for loop to index into it

const myArray=['Hi', true, 42.4, function () { console.log("Greetings")}]
myArray[3]() //this calls that function and executes it

for (let i=0; i<myArray.length; i++) {
console.log(myArray[i])
}