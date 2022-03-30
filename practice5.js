// let user = {
//     firstName: 'Rahul',
//     sayHi() {
//         console.log(this.firstName)
//     }
// }

// function hello() {
//     console.log('hello', this.firstName)
//     // console.log('-------------------')
// }

// let admin = {
//     firstName: 'Prateek'
// }

// user.sayHi()
// console.log(admin.firstName)
// user.sayHi()//rahul

// console.log(user.sayHi)
// user.sayHi.call(admin)

// hello()
// hello.call(admin)
// hello.call(user)

// hello.call(admin, 1, 2)
// hello.apply(admin, [3, 4])

// bind returns me a function with the new value of this

// let newHello = hello.bind(admin)
// newHello(1,2)

// hello.bind(admin)()
// hello.call(admin)
// hello.apply(admin)




// var message = 'Hello Earth'
// const obj = {
//     message: 'Hello, World'
// }
// function print() {
//     console.log(this.message)
// }

// print() //
// print.call(obj)
// print.apply(obj)
// print.bind(obj)()


// -------Map and set

// let myMap = new Map()

// myMap.set(1, 'num1') //a numeric key
// myMap.set('1', 'str1')// a string key
// myMap.set(true, 'bool1')// a boolean key

// // console.log(myMap)

// // console.log(myMap.get(1))
// // console.log(myMap.get('1'))

// // console.log(myMap.size)

// myMap.delete('1')

// myMap.clear()

// myMap.set('1', 'str1').set(1, 'num1').set(true, 'bool1')
// console.log(myMap)


// let fruitMap = new Map([
//     ['banana', 40],
//     ['kiwi', 150],
//     ['apple', 60]
// ])
