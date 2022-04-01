// async function prinAlphabets() {
//     let ans1 = await printLetter('A')
//     console.log(ans1)
//     console.log('Before B gets resolved')
//     let ans2 = await printLetter('B')
//     console.log(ans2)
//     console.log('Before C gets resolved')
//     let ans3 = await printLetter('C')
//     console.log(ans3)
// }
// prinAlphabets()

// console.log('first')

// let pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('second')
//     }, 1000)
// })

// // pr.then((data) => {
// //     console.log(data)
// //     console.log('third')

// // })

// async function fun() {
//     console.log('first')
//     let result = await pr
//     console.log(result)
//     console.log('third')
// }

// fun() //first, second, third



// ----------Prototypes

// let obj = {}
// console.log(obj)
// let animal = {
//     eats: true,
//     moves: true,
//     walk: function () {
//         console.log('I walk')
//     }
// }

// let rabbit = {
//     jumps: true,
//     carrot: 'yes'
// }

// let mouse = {
//     hasTail: true,
// }
