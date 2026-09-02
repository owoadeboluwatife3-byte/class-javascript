//js functions
//look at functions, string methods, array methods.

function greet() {
    console.log("you're welcome")
}

greet()
greet()
greet()

function greetperson(name) {
    console.log(`you're welcome, ${name}`)
}

greetperson('adams')
greetperson('maleek')



function print(word){
    console.log(word)
}

let thing = "what's up"
print(thing)

function add(x,y){
    return x+y
}

add(2,5)

add(5,60)

const tot = add(5,6)
console.log(tot)

//arrow function 
const addition = (a,b) => {
    return a + b
}

console.log(addition(6,7))

//write a function that format and gets the first and the last name to form the initial

function initial(name1,name2){
    console.log(name1.charAt(0).toUpperCase() + name2.charAt(0).toUpperCase())
}
initial('adams','bolu')

// instead of writing it as two different variable write it together and let it pick the capital letter of the first letter from each name 

function avn(name){
    console.log(`${name} thank you very much`)
}

avn('lildamz')

//assignment
function initial(names) {
    console.log(
        names[0].charAt(0).toUpperCase() +
        names[1].charAt(0).toUpperCase()
    );
}

initial(['adams', 'bolu',]);

//write a function that will encrypt the 6th to 9th number of any given phone number


// function encryptnum(num){
//     console.log(num.slice(0,5)+"****"+ num.slice(9))
// }

// encryptnum('08032121028')


function encryptnum(num){
    return num.slice(0,5)+"****"+ num.slice(9)
}
console.log(encryptnum('08080468240'))

//write an function that will log each element in the array to the console 

const fruits = ["Apple", "mango", "orange", "kiwi"]
//first approach
// for(i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }
//second 
// for(fruit of fruits){
//     console.log(fruit)
// }
//third

fruits.forEach((fruits) => console.log(fruits))

//assignment create a counter app