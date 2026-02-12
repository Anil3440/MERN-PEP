// // Logical Operators
// let res = (null && "A") || ("" || (5 && "Hi"));
// console.log(res); // "Hi"

// // Truthy function
// function isTruthy(a, b, c) {
//     if (a || b || c) {
//         return true;
//     } else return false;
// }
// const d = isTruthy("", 0, "Haha");
// console.log(d); // true


// // Type Conversions
// console.log(true + false); // 1
// console.log(10 * "abc");   // NaN


// // Type Checker Function
// function checkType(arg) {
//     if (typeof arg === 'object') {
//         if (Array.isArray(arg)) return 'array';
//         else if (arg === null) return 'null';
//         else return 'object';
//     } else {
//         return typeof arg;
//     }
// }

// const a1 = checkType("Hello");
// const b1 = checkType([1, 2, 3]);
// const c1 = checkType({1: "a"});
// console.log(a1); // string
// console.log(b1); // array
// console.log(c1); // object


// // Stack vs Heap
// let a = 20;
// console.log("a:", a);
// let b = a;
// b = 30;
// console.log("b:", b);
// console.log("a:", a);

// let arr1 = [1, 2, 3];
// let arr2 = arr1;
// console.log("arr1:", arr1);
// console.log("arr2:", arr2);
// arr2.push(10);
// console.log("arr2:", arr2);
// console.log("arr1:", arr1);


// // Arrow Function
// let greet = name => `Greetings from ${name}`;
// console.log(greet("Sapto"));


// // Even Number Filter
// function findEvenNumbers(arr) {
//     const res = [];
//     for (let i of arr) {
//         if (i % 2 === 0) {
//             res.push(i);
//         }
//     }
//     return res;
// }
// const arr = [2, 5, 7, 8, 4, 10];
// const evenArr = findEvenNumbers(arr);
// console.log("arr:", arr);
// console.log("evenArr:", evenArr);


// // Spread Operator + Destructuring
// let user = {
//     firstName: "Saptaparno",
//     lastName: "Chakraborty",
//     age: 21 
// };

// let { firstName: fn, lastName: ln } = user;
// console.log(`${fn} ${ln}`);

// let arrA = [1,2,3,4,5];
// let arrB = [6,5,9,7,9];
// let arrC = [...arrA, ...arrB];
// console.log(arrC);


// // Nested Destructuring
// let person = {
//     name: "Saptaparno",
//     age: 21,
//     city: "Anor Londo",
//     profile: [
//         { designation: "software engineer", degree: "BTech" }, 
//         { role: "backend engineer" }
//     ]
// };

// const { name: n, profile: prf } = person;
// const [{ degree }] = prf;
// console.log(`${n}'s degree is ${degree}`);


// // Looping object
// const user2 = {
//     id: 339,
//     name: "Sapto",
//     age: 21,
//     subjects: ["COA", "CN", "DBMS", "SD", "TS"],
//     education: {
//         degree: {
//             name: "CS"
//         }
//     }
// };

// for (let i in user2) {
//     console.log(i + ": " + user2[i]);
// }


// // First & Last Element Function (Destructuring)
// function fl(arr) {
//     const first = arr[0];
//     const last = arr[arr.length - 1];
//     return [first, last];
// }
// const array = [1, 2, 3, 4, 5, 6];
// const aa = fl(array);
// console.log(aa);


// // Rest Operator
// function greet2(name, ...hobbies) {
//     return `Hi! I am ${name} and my hobbies are ${hobbies.join(", ")}`;
// }
// const sentence = greet2("Sapto", "programming", "building things", "gaming");
// console.log(sentence);


// // Object Rest
// const sapto = {
//     firstName: "Saptaparno",
//     lastName: "Chakraborty",
//     age: 21,
//     hobbies: ["coding", "building stuff", "gaming"]
// };
// const { age, ...saptoWithoutAge } = sapto;
// console.log(saptoWithoutAge);


// // Optional Chaining
// const person2 = {
//     id: 1,
//     name: {
//         fn: "a",
//         ln: "b",
//     },
//     age: {
//         years: 2,
//         months: 6,
//     },
//     weight: "5 kg"
// };

// const ageRes = person2.age?.years || 0;
// console.log(ageRes);


// // Product Discount with Optional Chaining
// const product = {
//     id: 1,
//     name: {
//         pref: "a",
//         suff: "b",
//     },
//     price: {
//         currency: "INR",
//         value: 9000,
//     },
//     weight: "5g"
// };

// const discountedPrice = product.price?.value 
//     ? (product.price.value * 0.9).toFixed(2)
//     : "0.00";

// console.log(discountedPrice);


// // Higher Order Function
// function Hi() {
//     console.log("Hi from Hi function");
// }
// function foo(cb) {
//     return cb();
// }
// foo(Hi);


// // forEach()
// const arrX = [1, 2, 3, 4, 5, 6];
// arrX.forEach((x) => {
//     console.log(x);
// });

// const arr = [
//     {
//         name: 'A',
//         age: 20,
//         gender: 'M'
//     },
//     {
//         name: 'B',
//         age: 21,
//         gender: 'F'
//     },
//     {
//         name: 'C',
//         age: 22,
//         gender: 'M'
//     }
// ];
// arr.forEach(obj => {
//     let{name,age} = obj;
//     console.log(`Hello ${name}, your age is ${age}`);
// });

// const arr = [1,2,3,4,5];
// const modifiedArr = arr.map(i=>{
//     return i*i;
// });
// console.log(modifiedArr);
// const strArr = ['Anil','Kumar','choudhary'];
// const finalArr = strArr.map(i=>i.toUpperCase());
// console.log(finalArr);

// let arr = [1,2,1,3,3,5,'Hi','Hello','Hi',1,1];
// const obj = {};
// arr.forEach(i=>{
//     obj[i] = obj[i] ? obj[i]+1 : 1;
// });
// console.log(obj);

// const arr = ['Hello World', 'John doe', 'nimbu Paani'];
// const res = arr.map(i=>{
//     return (i[0].toUpperCase()+i.slice(1).toLowerCase()).replace(/\s+/g,"").trim();
// });
// const res = arr.map(i=>{
//     return i
//     .split(' ')
//     .map(l => l[0].toUpperCase()+l.slice(1).toLowerCase())
//     .join('');
// });
// console.log(res);

// const arr = ['aam', 'kela', 'nimbu'];
// const res = arr.map(word=>{
//     return word[0].toUpperCase()+word.slice(1).toLowerCase();
// });
// console.log(res);

//.filter() method
// const arr = ['','Anil','Ayush',' '];
// const res = arr.filter(i=>i.trim()!=='');
// console.log(res);

// const arr = ['hello','world','Anil','Ayush','aditya'];
// const ans = arr.filter(i=>{
//     return i[0] === i[0].toUpperCase();
// });
// console.log(ans);

//.reduce() method

// const arr = [1,2,3,4,5];
// const ans = arr.reduce((acc,curr)=>{
//     return acc*=curr;
// },1);
// console.log(ans);

// let arr = ['apple','banana','apple','orange','banana','apple'];
// const ans = arr.reduce((acc,curr)=>{
//     acc[curr] = (acc[curr] || 0)+1;
//     return acc;
// },{});
// console.log(ans);

//group numbers into even and odd using reduce
const arr = [1,2,3,4,5,6];
const ans = arr.reduce((acc,curr)=>{
    if(curr%2==0){
        acc.even.push(curr);
    }else{
        acc.odd.push(curr);
    }
    return acc;
},{even: [],odd: []});
console.log(ans);