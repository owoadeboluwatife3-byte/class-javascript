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
//revision on function

function nameinitial(name){
    const names = name.split(' ')
    return names[0].charAt(0).toUpperCase() + names[1].charAt(0).toUpperCase()

}

console.log(nameinitial('adams owoade'))

const namess = nameinitial('adams pete')
console.log(namess)

//javascript dom
document.body.style.backgroundColor = 'grey'

const heading = document.getElementById('heading')

// heading.innerText = 'welcome to lildamz page'
//innertext is used to replace words 
const redbg = document.getElementById('redbg')
const greenbg = document.getElementById('greenbg')
const changeTxt = document.getElementById('changeTxt')

redbg.addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'red'
})

greenbg.addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'green'
})

changeTxt.addEventListener('click', ()=>{
    heading.innerText = 'welcome back to coding'
})

//create an input and then a button, whatever you put inside the input should become a background based on whaever you type inside your input

//correction to the assignment

const colorinput = document.getElementById('colorinput')
const changebg = document.getElementById('changebg')
const resetbg = document.getElementById('resetbg')
const createdcont = document.getElementById('createdcont')

changebg.addEventListener('click', ()=>{
    const bg = colorinput.value
    document.body.style.backgroundColor = bg
    colorinput.value = ' '
})

resetbg.addEventListener('click',()=>{
    document.body.style.backgroundColor = 'white'
})

const ayoola = document.createElement('div')
ayoola.style.height = '40vh';
ayoola.style.width = '50%';
ayoola.style.backgroundColor = 'green'
ayoola.style.color = 'white'

createdcont.append(ayoola)

const paragraph = document.createElement('p')
paragraph.innerText = "hello i'm learning dom may God help me"

ayoola.append(paragraph)

//build a simple calculator with javascript
