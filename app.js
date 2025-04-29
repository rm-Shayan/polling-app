// 🌀 IIFE (Immediately Invoked Function Expression) — 10 Problems
// Write a simple IIFE that logs "Hello, World!" to the console.

// Write an IIFE that adds two numbers and returns the sum.

// Create an IIFE that takes a number and logs if it is even or odd.

// Create an IIFE that accepts a string and returns its reversed version.

// Create an IIFE that counts from 1 to 5 and logs each number.

// Create an IIFE that immediately sets a global variable status to 'active'.

// Write an IIFE that accepts two numbers and returns the greater number.

// Modify an IIFE to accept user input (simulate with hardcoded values) and log it.

// Create an IIFE that returns an object with name and age properties.

// Write an IIFE that takes an array and logs each element multiplied by 2.


// answer 1
 // (function(){
//     console.log(`Hello World`)
// })()


// answere 2
// console.log((function(a,b){
//     return a+b
//     })(12,13))

// answer3
// (function(num){
// if(num%2==0){
// console.log(`${num} is even`)
// }else{
//     console.log(`${num} is odd`)
// }
// })(0)

// answere 4
// console.log(
//     (function(str) {
//       str = str.split("").reverse().join("");
//       return str;
//     })("shayan")
//   );
  
// answer 5
// (function(){
//     for(i=1;i<=5;i++){
// console.log(i)
//     }
// })()

// answere 6
// let global=null;
// (function(){
//     global=`active`
//     console.log(global)
// })()

// answer 7
// (function(a,b){
// if(a>b){
//     console.log(`a greater than b`)
// }else if(b>a){
//     console.log(`b greater than a`)
// }
// })

// answer 8
// let input=document.getElementById("input")
// input.addEventListener("keypress",(event)=>{
//     if(event.key=="Enter"){
//         let userInput=async ()=>{
//             let inputValue=await(input.value);
//             ( function(input){
//                 console.log(input)
//             })(inputValue)
            
//         } 
//         userInput()
        
        
//     }
// })

// answwer 9
// let obj = {};

// console.log((function(name, age) {
//     obj = {
//         name: obj.name || name,
//         age: obj.age || age
//     };

//     return obj;
// })('shayan', '20'));


// answer 10



// (function(arr){
// let [a,b,c,d,e]=arr

// console.log(a * 5)
// console.log(b * 5)
// console.log(c * 5)
// console.log(d * 5)
// console.log(e * 5)
// })([1,2,3,4,5])


// ⚡ Arrow Functions — 10 Problems
// Convert a regular function to an arrow function that returns the square of a number.

// Write an arrow function that returns the sum of two numbers.

// Create an arrow function that returns the larger of two numbers.

// Write an arrow function that returns "Even" or "Odd" based on input number.

// Create an arrow function that accepts a string and returns it in uppercase.

// Write an arrow function to filter out even numbers from an array.

// Create an arrow function that takes an array and returns the first element.

// Write an arrow function to calculate the factorial of a number.

// Create an arrow function that checks if a string is a palindrome.

// Write an arrow function that sorts an array of numbers in ascending order.


// answer 1
// let squareOfNnumber=(a)=>{
// return Math.pow(3,2)
// }
// console.log(squareOfNnumber(3))

// answer 2
// let sum=(a,b)=>a+b

// console.log(sum(1,3))

// answer 3
// let greaterNumberFindingFn=(a,b)=>{
// if(a>b){
//     console.log(`first is greater`)
// }else{
//     console.log(`2nd is greater`)
// }
// }
// greaterNumberFindingFn(189,7272)

// answer 4
// let oddEven=(num)=>{

// if(num%2==0){
// console.log(`${num} is even`)
// }else{
//     console.log(`${num} is odd`)
// }
// }
// oddEven(87)

// answer 5
// let ConversionInUpCase=str=>str.toUpperCase()

// console.log(ConversionInUpCase(`bvjsdhj`))

// answer 6

// let arr=[1,2,3,4,5,6,7,8,9,10]


// let filterEven=()=>{
//     EvenArr=arr.filter(a=>a%2==0)
//     return EvenArr
// }
// console.log(filterEven())

// answer 7

// let firstElement=arr=>{
//     let [a]=arr;
// return a
// }
// console.log(firstElement(arr))

// answer 8
// let local=1
// let factorialOfNum=(num)=>{
// for(i=num;i>0;--i){
// local*=i
// }
// return local
// }
// console.log(factorialOfNum(5))

// answer 9
// let palindrom=(p)=>{
// if(p.split(" ").reverse().join("")==p){
//     console.log(`word is palindrom`)
// }else{
//     console.log(`word is not palindrom`)
// }
// }
// palindrom(`cuc`)

// answer 10
// let arr=[1,5,7,2,8,4,6]

// let ascend=()=>{
//     console.log(arr.sort((a,b)=>b-a))
// }
// ascend()


// 🛠️ Destructuring — 10 Problems
// Destructure an array [1, 2, 3] into three separate variables.

// Destructure an object { name: "John", age: 25 } and log both properties.

// Destructure a nested object { user: { name: "Alice", email: "alice@example.com" } }.

// Destructure an array and skip the second element.

// Use destructuring to swap two variables.

// Destructure an array and set a default value if the element is undefined.

// Destructure a function parameter inside the function body.

// Destructure an object with a default value if the key doesn’t exist.

// Destructure and rename a property from an object { firstName: "Bob" } to a variable name.

// Destructure multiple properties from a complex object inside a function.

//  answer 1
// let arr=[12,7,true]

// let [a,...rest]=arr;
// console.log(a,rest)

// answere 2


// let object ={ name: "John", age: 25 }

// let {name:myName,age}=object;
// console.log(myName);
// console.log(age);

// // answer 3
// let object = {
//     user: {
//       name: "Alice",
//       email: "alice@example.com"
//     }
//   };
  
// let { user: { name, email: EMAIL } } = object;

// console.log(name);  // Alice
// console.log(EMAIL); // alice@example.com

// answer 4
// let arr=[1,true,`jb`,`tb`]

// let [a,,b]=arr

// console.log(a);
// console.log(b)

// answer5

// let a = 5;
// let b = 10;

// [a, b] = [b, a]; // Destructuring swap

// console.log("a:", a); // 10
// console.log("b:", b); // 5

// answer 6
// let arr=[`hkjkj`,,21331,false]

// let [a,b="shayan",c]=arr



// console.log(a,b,c);

// answer 7

// let pae=(...des)=>{
// let [a,b,c,...d]=des;
// console.log(a,b,c,d)
// }
// pae(1,2,3,4,5)


// answer 8
// let obj={
//     firstName:"rao",
// }
// let {firstName,lastName=`Muhammad Shayan`}=obj

// console.log(firstName,lastName,obj)

// answere 9

// let obj = {
//     firstName: "shayan",
// };

// let { firstName: name } = obj;
// console.log(name); // Output: shayan

// answer 10

// function getUserProfile() {
//     return {
//         id: 101,
//         personalInfo: {
//             firstName: "Shayan",
//             lastName: "Rao",
//             age: 25
//         },
//         contact: {
//             email: "shayan@example.com",
//             phone: "123-456-7890"
//         },
//         skills: ["JavaScript", "React", "Node.js"]
//     };
// }

// // Destructuring with renaming and nested properties
// const {id,personalInfo:{firstName:nameFirst,lastName:nameLast,age},contact:{email:Email,phone},skills:[a,b,c]}=getUserProfile()


// console.log(id)
// console.log(nameFirst,nameLast,age)
// console.log(Email,phone)
// console.log(a,b,c)

// 📦 Spread Operator — 10 Problems
// Use the spread operator to copy an array [1, 2, 3] into another array.

// Merge two arrays [1, 2] and [3, 4] using the spread operator.

// Spread an array into a function that accepts multiple arguments (e.g., Math.max).

// Copy an object { a: 1, b: 2 } using the spread operator.

// Merge two objects { a: 1 } and { b: 2 } using spread syntax.

// Create a function that accepts multiple arguments using spread and sums them.

// Spread a string "hello" into an array of characters.

// Use spread operator to add new elements to an existing array.

// Use spread operator inside a function call that expects multiple parameters.

// Copy and update one property of an object while keeping the others intact.

// 🔗 Rest Parameters — 5 Problems
// Write a function that uses rest parameters to sum any number of arguments.

// Write a function that accepts one fixed argument and a rest parameter, then logs both.

// Create a function that accepts any number of strings and joins them into one sentence.

// Write a function that takes rest parameters and returns an array of their squares.

// Write a function that accepts multiple numbers and returns only the odd ones.

// 🧩 Default Parameters — 5 Problems
// Write a function with a default parameter for name = "Guest".

// Write a function that multiplies two numbers, with the second number defaulting to 1.

// Create a function that greets a user, defaulting to "Hello, User!" if no name provided.

// Write a function that takes an array and a default parameter value (empty array).

// Write a function that returns a user’s age, defaulting to 18 if not provided.






// Get references to elements
let questionContainer_textArea = document.getElementById("questions-container");
let createBtn = document.getElementById("create-btn");

// 1. Jab button click kare tab save kare localStorage me
createBtn.addEventListener("click", () => {
  let pollText = questionContainer_textArea.value.trim();

  if (!pollText) {
    alert("Please enter questions and options!");
    return;
  }

  // Purana data uthao
  let existingData = JSON.parse(localStorage.getItem("poll")) || [];

  // Add naya poll text
  existingData.push(pollText);

  // Save back to localStorage
  localStorage.setItem("poll", JSON.stringify(existingData));

  alert("Poll saved successfully!");
});

// 2. Jab page load ho, tab localStorage ka data uthao aur object create karo
window.addEventListener("DOMContentLoaded", () => {
  let savedData = JSON.parse(localStorage.getItem("poll")) || [];

  if (savedData.length > 0) {
    // Merge all saved data into one big text
    let allPollText = savedData.join('\n');

    // Split lines
    let lines = allPollText.split('\n').map(line => line.trim()).filter(line => line !== "");

    let pollObjects = [];
    let currentQuestion = null;

    lines.forEach(line => {
      if (/^\d+\.\s/.test(line)) { // Agar line number se start hoti hai
        if (currentQuestion) {
          pollObjects.push(currentQuestion);
        }
        currentQuestion = {
          question: line.replace(/^\d+\.\s/, ''), // "1. " hatado
          options: []
        };
      } else {
        if (currentQuestion) {
          currentQuestion.options.push(line);
        }
      }
    });

    // Last question bhi add karo
    if (currentQuestion) {
      pollObjects.push(currentQuestion);
    }

    // Console me show karo final object
    console.log("Parsed Poll Objects:", pollObjects);

    // (Optional) Screen par bhi dikhana hai to yahan code likh sakte ho
  } else {
    console.log("No Poll Data Found.");
  }
});


