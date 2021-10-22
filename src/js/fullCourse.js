// // Data Types
// // Primitives & Object
// // number (0, 1, NaN, Infinity)
// // string
// // boolean (true & false)
// // null (== object)
// // undefined
// // Symbol & BigInt

// import axios from 'axios'
// import { APIpexel } from './services'

// // Object
// // Array
// // Object
// // Function
// // Collections:

// // logical ==>> boolean: if() switch()
// // 6 falcy values: 0, NaN, "", null, undefined, false
// // console.dir(document.querySelector('body'))

// // create {}
// // Function Constructor & Class

// class User {
//   constructor() {
//     this.name = name
//   }
//   updateName(v) {
//     return (this.name = v)
//   }
// }
// // call = User() & construct = {} new
// const newUser = new User()

// // function declaration
// function myF(arg1, arg2, arg3) {
//   console.log('declaration', this) // window
//   console.log('declaration', this.key) // window
//   console.log(arg1, arg2, arg3)
//   // this привязывается в момент вызова, НЕ ПРИ ОБЪЯВЛЕНИИ
// }
// // myF() // тут this привязывается

// // function expression
// const myFE = function () {
//   console.log('expression', this) // window
//   // this привязывается в момент вызова, НЕ ПРИ ОБЪЯВЛЕНИИ
// }
// // myFE() // тут this привязывается

// // arrow function
// const myFA = () => {
//   console.log('arrow', this) // window
//   // this привязывается при
// }
// // myFA()

// const obj = {
//   key: 'value',
//   methodDecl: myF,
//   methodExpr: myFE,
//   methoderrow: myFA,
// }
// // console.log(obj)

// // obj.methodDecl()
// // obj.methodExpr()
// // obj.methoderrow()

// const obj2 = {
//   key: 'new value',
// }
// // obj.methodDecl.call(obj2, 1, 2, 3)
// // obj.methodDecl.apply(obj2, [1, 2, 3])

// ;(() => {
//   console.log(`IFEE`)
// })()

// // function x(cb) {
// //   console.log(`bind`)
// //   cb()
// // }
// // x(obj.methodDecl.bind(obj2, [1, 2, 3]))

// button.addEventListener('click', apiPexel.getFetch.bind(obj, listPlace))

// function handleClick() {
//   apiPexel.getFetch(listPlace)
// }
// button.addEventListener('click', handleClick)

// // http/https & ws/wss

// // https://heroku.com/api/user/auth
// // https://heroku.com/api/user/profile
// // https://heroku.com/api/user/friends
// // https://heroku.com/api/user/posts
// axios.defaults.baseURL = `https://heroku.com/api`

// axios
//   .get(`/user/auth`)
//   .then(response => response)
//   .catch(err => err)
//   .finally(() => 'hello')
// //========
// ;(async () => {
//   try {
//     const response = await axios.get(`/user/auth`)
//     const data = response.data
//     // if (data.arr.length > 0) {
//     //   return data
//     // } else {
//     //   throw new Error({ err: 'No match found' })
//     // }
//     if (data.arr.length === 0) throw new Error({ err: 'No match found' })
//     return data
//   } catch (err) {
//     return err
//   } finally {
//     console.log('hello')
//   }
// })()

// fetch(`https://heroku.com/api/user/auth`)
//   .then(r => r.json())
//   .then(d => d)
//   .catch(err => err)
//   .finally(() => 'hello')

// const user = {
//   auth: {
//     name: 'user',
//     email: 'email',
//     phone: '050 22 44 777',
//   },
//   profile: {
//     age: 18,
//     images: [],
//   },
//   friends: [],
//   posts: [],
// }

// (x) => {
//     //
//     //
//     return x + 1
// }

// (x) => x + 1

var faker = require('faker');

    var randomName = faker.name.findName(); // Rowan Nikolaus
    var randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz
    var randomCard = faker.helpers.createCard();
    console.log(randomName);
    console.log(randomEmail);
    console.log(randomCard);

     // random contact card containing many properties