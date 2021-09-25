// variable
// var nickname = 'Post' + 'er'
// console.log(nickname.length)
// const price = true
// console.log(price)
// let nickname2 = 'John cho rai'
// console.log(nickname2)

// operators +-*/
// const country = 'Thailand'
// const province = 'Bangkok'
// const district = 'Bangkae'
// let sum = country + ' ' + province + ', ' + district
// console.log(sum)
// const a = 10
// const b = '20'
// let result = a + b
// console.log(result)
// const pi = 3.14
// const r = 2
// let area = pi * r * r
// console.log(area)

// logic
// const price = 99
// console.log(price < 100)
// const isRaining = false
// console.log(!isRaining)

// Quiz
// Ex. trianle area = 0.5 * base * height
// const base = 10
// const height = 5
// let triangleArea = 0.5 * base * height
// 1) circle area = pi * r * r
// const pi = 3.14
// const r = 2
// let circleArea = pi * Math.pow(r, 2)
// 2) equilateral triangle area = [(square root 3) / 4] * a^2
//      Hint. Math.sqrt(3) Math.pow(a)
// const a = 2
// let equiplateralTriangleArea = (Math.sqrt(3) / 4) * Math.pow(a, 2)

// Logical operators
const isRaining = true
const isFlood = false
console.log(isRaining && isFlood) // and
console.log(isRaining || isFlood) // or
console.log(!isRaining) // invert

// Quiz
const language = 'thai'
const population = 49

if (language === 'english' && population < 50) { // strcmp
    console.log('Happy')
} else {
    console.log('Unhappy')
}
