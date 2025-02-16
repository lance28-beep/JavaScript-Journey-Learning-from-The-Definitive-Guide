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

    console.log(typeof(num.toFixed()),num.toFixed())
    console.log(typeof(Math.round(num)),Math.round(num))

    console.log(num.toExponential(2))
    console.log(num.toPrecision(7))

    console.log(Number(num2),typeof(Number(num2)))
    console.log(parseInt(num2),parseFloat(num2))

    console.log(typeof(parseInt(str1)),parseInt(str1))
    console.log(typeof(parseInt(str2)),parseInt(str2))
    console.log(str2.valueOf())

    let {xx , yy} = {2,5}