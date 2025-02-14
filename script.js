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


let thisText = "this is a text \n and i \"add new line \n and another new line"


console.log(thisText)