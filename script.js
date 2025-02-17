console.log(0xBADCAFE)
console.log(0xff + 0o377)
console.log(0xffddf47)

//floating numbers
console.log(1_000_000_000)
console.log(0x89_AB_CD_EF)
console.log(0b0001_1101_0111)
console.log(0.123_456_789)

console.log(Math.pow(53,3))
console.log(53*53*53)
console.log(Math.round(5.01))
console.log(Math.ceil(5.01))
console.log(Math.floor(5.99))
console.log(Math.abs(-99))
console.log(Math.max(100,99,200,33,1,-99))
console.log(Math.min(100,99,200,33,1,-99))
console.log(Math.random(5,5))
console.log(Math.PI)
console.log(Math.E)
console.log(Math.sqrt(9))
console.log(Math.pow(3,3/3))
console.log(Math.sin(0))
console.log(Math.log(10))


let bigNumber = 1/0;
console.log(Number.isFinite(bigNumber))

let timestamp = Date.now()
console.log(timestamp)
let now = new Date()
console.log(now)
let ms =  now.getTime()
console.log(ms)
let iso = now.toISOString()
console.log(iso)


let thisText = "this is a \n text \n and i \"add new line \n and another new line"


console.log(thisText.length)


let myName = "Lance Valle"
let otherText = "Beautiful Life"

console.log(myName.slice(2,4))
console.log(myName.substring(2,4))
console.log(myName.slice(-3))
console.log(myName.split(' '))
console.log(myName.indexOf("e"))
console.log(myName.lastIndexOf("e"))
console.log(myName.startsWith("L"))
console.log(myName.endsWith("e"))
console.log(myName.includes("nce"))
console.log(myName.replace("Lance","Rolando"))
console.log(myName.toLocaleLowerCase())
console.log(myName.toUpperCase())
console.log(myName.trim())
console.log(myName.trimStart())
console.log(myName.trimEnd())
console.log(myName.padStart(15,"*"))
console.log(myName.padEnd(20,"*"))
console.log(myName.charAt(6))
console.log(myName[6])
console.log(myName.charCodeAt(0))
console.log(myName.codePointAt(0))
console.log(myName.concat(otherText))
console.log(myName.repeat(5))
console.log(`Hello my name is ${myName}`)


let a = 3;
let b = 10;

if(a===4){
    b = b+ 1;
}else{
    a = a + 1
}

console.log(b>a&&b>b)
console.log(b>a||b>b)
console.log(!b>a)

console.log(null === undefined)

function multiply(a,b){
    console.log("a:", a);
    console.log("b:", b)
    return a * b
}

console.log(multiply(null,5))

let mySymbolName = Symbol()

console.log(typeof mySymbolName)

let symbol1 = Symbol("test");
let symbol2 = Symbol("test");

console.log(symbol1 === symbol2)


let hello = "hello"

hello.toUpperCase()

console.log(hello)

console.log(10 + " objects");  // => "10 objects"
// JavaScript expects a string for concatenation (+) because one operand is a string.
// It *converts* the number '10' to the string "10" and then joins them.

console.log("7" * "4");       // => 28
// JavaScript expects numbers for multiplication (*).
// It *converts* both strings "7" and "4" to the numbers 7 and 4 and then multiplies.

console.log(1 - "x");   // n becomes NaN
// JavaScript expects numbers for subtraction (-).
// It tries to convert "x" to a number, but fails and gets NaN (Not-a-Number).

console.log(Boolean("Lance Valle"))
console.log(parseInt("will parse the number like 13.65 for example"))
console.log(parseFloat("will parse the number like 13.65 for example"))

let x = 42 + ""
let strNum = +"42"
let strNum1 = "42" - 1
let strNum2 = !"xx"
let strNum3 = !!"xx"

console.log(typeof(x),x)
console.log(typeof(strNum),strNum)
console.log(typeof(strNum1),strNum1)
console.log(typeof(strNum2),strNum2,strNum3)

// Number Formatting

let number1 = 12;

console.log(number1.toString(2))
function convertToInteger(str) {
    return parseInt(str, 2)
    }
    
    console.log(convertToInteger("1"));
    console.log(convertToInteger("10"));
    console.log(convertToInteger("11"));
    console.log(convertToInteger("100"));
    console.log(convertToInteger("101"));
    console.log(convertToInteger("110"));
    console.log(convertToInteger("111"));
    console.log(convertToInteger("1000"));
    console.log(convertToInteger("1001"));
    console.log(convertToInteger("1010"));
    console.log(convertToInteger("1011"));
    console.log(convertToInteger("1100"));
    console.log(convertToInteger("1101"));
    console.log(convertToInteger("1110"));
    console.log(convertToInteger("1111"));
    console.log(convertToInteger("10000"));
    console.log(convertToInteger("10001"));
    console.log(convertToInteger("10010"));

    let num = 12536.21455
    let num2 = "12536.21455"
    let str1 = "3 blind mice"
    let str2 = "$71.00"

    console.log(typeof num.toFixed(),num.toFixed())
    console.log(typeof Math.round(num),Math.round(num))

    console.log(num.toExponential(2))
    console.log(num.toPrecision(7))

    console.log(Number(num2),typeof(Number(num2)))
    console.log(parseInt(num2),parseFloat(num2))

    console.log(typeof parseInt(str1),parseInt(str1))
    console.log(typeof parseInt(str2),parseInt(str2))
    console.log(str2.valueOf())

    const SPEED_OF_LIGHT = 299792458;

    function hoistingExample() {
        console.log(hoistedVar); // Output: undefined (no error, but value is undefined)
        var hoistedVar = "I'm hoisted!"; // Declaration is hoisted to the top, initialization stays here
        console.log(hoistedVar); // Output: "I'm hoisted!"
      }
      hoistingExample();
      
      function letConstExample() {
        // console.log(letConstVar); // Error! ReferenceError: Cannot access 'letConstVar' before initialization
        let letConstVar = "No hoisting with let/const";
        console.log(letConstVar);
      }
      letConstExample();

      let [d1,d2] = [2,5]
      let coordinates = [5,8]
      let [coor1, coor2]  = coordinates
      let swap_1 = 1, swap_2 = 3
      let numbers = [1,2,3,4,5,6,7,8,9]
      let [first_num,...rest_num] = numbers
      let message = "JS"

      console.log(...numbers)
      console.log(first_num)
      console.log(rest_num)
      console.log([num1,num2,num3] = numbers)
      console.log([char1,char2] = message)
      console.log(char1)

      console.log([swap_1,swap_2] = [swap_2,swap_1])

      console.log(d1)
      console.log(coordinates)
      console.log(coor1,coor2)

      let person = {firsName : "Rolando", lastName :"Valle"};

      let {firsName, lastName} = person
      

      console.log(person)
      console.log(firsName)

      let company = {name : "Atlantic Bakery",location:{city:"Naga city",barangay:"Abella"}}

      let {location:{city:NameofCity}} = company

      console.log(NameofCity)

      function Person(name){
        this.name = name
        return console.log(`Hello my Name is ${this.name}`)
      }

      let names = ["lance","rosa","jess","lea","danzel"]

      names.map(name => new Person(name))
let wow = function(){
    console.log("WOW")
}
wow()
let wow2 = (name) => console.log(`wow ${name}`)
wow2("lance")

let arry = ['a','b','c','d','e']
let obj = { a : "a", b : "b", c : "c",d:"d",e:"e"}

console.log(obj.a)
console.log(obj["a"])

let data = {
    person: {
      name: "Alice",
      address: {
        city: "Wonderland"
      }
    },
    items: ["book", "pen"]
  };

  console.log(data.person.address.city)
  console.log(data["person"]["address"]["city"])
  console.log(data?.person.address.city)
  console.log(data?.person.address.municipality)
  console.log(data?.["person"]["address"]["city"])
  console.log(data?.["person"]["address"]["municipality"])

  let anothera = [1, 2, 3, 4, 5]; // Assume 'a' is an array

  for (let i = 0; i < anothera.length; anothera[i++] = 0) ; 
  let ss = 0;
  let dd = 1;
  let o;
  
  if ((a === 0) || (b === 0)); // <--- Oops! Accidental semicolon here!
    o = null; 

let lieDetector = true

if(lieDetector){
    console.log("she is telling the truth")
}else{
    console.log("she is lying")
}

let color = 'nothing'

switch(color){
    case 'red':
        console.log(`${color}`)
        break;
    case 'green':
        console.log(`${color}`)
        break;
    case 'yellow':
        console.log(`${color}`)
        break;
    default:
        console.log(`${color}`)
        break;
}

let count = 1;

while(count < 10){
    count++;
    console.log(`count ${count}`)
}

do{
    count--;
    console.log(`count ${count}`)
}while(count>1)

for(let count2 = 0; count2 < 10; count2++){
    console.log(count2)
}

let sum = 0;
for(let i=0,j=10;i<10;i++,j--){
    sum += i * j
}

console.log(sum)


let newArray = []
for (let i of arry){
    console.log(i)
    newArray.push(i)
}

console.log(newArray)

let xy = arry.map((ar)=>{
    console.log(ar)
    return ar;
})

console.log(xy)

let hellos = "Hello World"

let solleh = []
for(let l of hellos){
    console.log(l)
    solleh.unshift(l)
}

for(let l in hellos){
    console.log(l)
}

console.log(solleh.join(""))
console.log(solleh.sort().join(""))

let object2 = { index1 : "a", index2 : "b", index3 : "c",index4:"d",index5:"e"}

for (let i of Object.values(object2)){
    console.log(i)
}

for (let i in object2){
    console.log(i)
}

let newArray2 = []

for (let i of Object.entries(object2)){
    console.log(i)
newArray2.push(i)
}

let newArray3 = []

for (let i in object2){
    console.log(i)
    newArray3.unshift(object2[i])
    console.log(newArray3)
}

console.log(newArray.join(''))
console.log(newArray3.sort().join(''))


// outerLoop: for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//       console.log(`i=${i}, j=${j}`);
//       if (i === 2 && j === 2) {
//        break outerLoop; // Exits BOTH loops
//       }
//     }
//   }
//   console.log("Exited the loops!");

// outerLoop: for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//       if (j === 2) {
//         continue outerLoop; // Skips the rest of inner loop & goes to next i
//       }
//       console.log(`i=${i}, j=${j}`);
//     }
//   }
//   console.log("Done looping!");

// let numList = [1,2,3,4,5,6,7,8,9]
// let numList2 = []

// for(let i = 1 ; numList.length > i ;i++){
//     numList2.push(numList[i])
//     if(i === 5){
//         break;
//     }
//     console.log(i)
// }

// console.log(numList2)

// let numbers2 = [10, 25, 5, 30, 15];
// let target = 30;
// let foundIndex = -1; // Initialize to -1 (not found yet)

// for (let i = 0; i < numbers2.length; i++) {
//   if (numbers2[i] === target) { // Found the target value!
//     foundIndex = i;       // Store the index where it was found
//     break;               // Exit the loop IMMEDIATELY! No need to check further
//   }
// }

// if (foundIndex !== -1) {
//   console.log(`Target ${target} found at index ${foundIndex}`); // Output: Target 30 found at index 3
// } else {
//   console.log(`Target ${target} not found.`);
// }

// let matrix = [ // 2D array (matrix)
//     [1, 2, 3],
//     [4, NaN, 6], // Oops, NaN value here!
//     [7, 8, 9]
//   ];
//   let sumOne = 0;
//   let success = true;
  
//   computesumOne: { // Labeled block - not a loop, just a block of code with a label
//     for (let i = 0; i < matrix.length; i++) {
//       let row = matrix[i];
//       if (!row) { // Check for null or undefined row
//         success = false;
//         break computesumOne; // Break out of the 'computesumOne' block if row is invalid
//       }
//       for (let j = 0; j < row.length; j++) {
//         let cell = row[j];
//         if (isNaN(cell)) { // Check for NaN (Not-a-Number)
//           success = false;
//           break computesumOne; // Break out of the 'computesumOne' block if cell is NaN
//         }
//         sumOne += cell;
//       }
//     }
//     success = true; // If we get here without breaking, the sumOne was successful
//   } // End of 'computesumOne' block
  
//   if (success) {
//     console.log("sumOne of matrix:", sumOne); // Will not output in this example because of NaN
//   } else {
//     console.log("Error in matrix, sumOne not calculated."); // Output: Error in matrix, sum not calculated.
//   }

//   let datas = [10, undefined, 20, null, 30, 40, undefined];
// let total = 0;

// for (let i = 0; i < datas.length; i++) {
//   if (!datas[i]) { // Check if datas[i] is falsy (undefined, null, 0, false, "", NaN)
//     console.log(`Skipping invalid datas at index ${i}`);
//     continue;       // Skip the rest of this iteration, go to the next value of 'i'
//   }
//   total += datas[i]; // Add valid datas to the total
// }
// console.log("Total sum of valid datas:", total); // Output: Total sum of valid data: 100 (10+20+30+40)

// let sumArray = [2,5,NaN,6,5,14,undefined,5,9,6,null];
// let sumofArry = 0;

// for(let i = 0 ; i < sumArray.length ; i++){
//     if(!isFinite(sumArray[i])){
//         console.log(`skip the ${sumArray[i]}`)
//         continue;
//     }
//     sumArray+=sumArray[i]
// }

// console.log(sumofArry)
let datas = [10, undefined, 20, null, 30, 40, undefined,NaN];

console.log(isFinite("5"))
console.log(datas[0])
console.log(!datas[1])

let sum2 = 0;

for(let i = 0; i < datas.length; i++){
    if(!datas[i]){
        console.log(`this is invalid ${data[i]}`)
        continue;
    }
    sum2+=datas[i]
}

console.log(sum2)