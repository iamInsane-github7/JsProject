// let  obj= {
//     name:"upendra",
//     age:20,
//     phone:123456789
// }
// // console.log(obj.name);
// obj.address="kathmandu";
// console.log(obj);
// obj.age=21;
// console.log(obj);
// delete obj.address;
// console.log(obj);

//   const object={
//     name:"Insane",

//     add:()=>{
//         console.log("hello");
//   }
//   }
//   Object.add()

//num1=[1,2,3,4,5]; find sum
// const obj = {
//   num: {
//     num1: [1, 2, 3, 4, 5],
//   }
// }
//    num2:[{
//     name:"xyz"
//    }]

//     //console.log(obj.num.num1);
//     console.log(obj.num.num2[0].name);
// let sum = 0;

// obj.num.num1.forEach((items) => {
//   sum = sum + items;
// });
// console.log(sum);

1; // list all the activity of fluffy's catFriend and total weight of catFriend.
// var cat ={
//   name:"fluffy",
//   activities:["play","eat cat food"],
//   catFriend:[
//     {
//       name:"bar",
//       activities:["be grumpy","eat bread omelette"],
//       weight:8,
//       furcolor:"white"
//     },
//     {
//       name:"foo",
//       activities:["sleep","eat mouse"],
//       weight:3,
//       furcolor:"black"
//     }
//   ]
// }
//  cat.catFriend.forEach((items)=>{

//    console.log(items.name);
//    console.log(items.activities);
//    console.log(items.weight);
//    console.log(items.furcolor);
//})
//  var allactivities= cat.catFriend.flatMap(friend=>friend.activities);
//  console.log("all the activity of fluffy's catFriend", allactivities);

// var totalweight=0;
// for( vari=0; i<cat.catFriend;i++){
//   totalweight=totalweight + cat.catfriend[i].weight;
// }
// cat.catFriend.forEach((items)=>{
//   totalweight=totalweight+items.weight;
// })

//console.log("total weight of catFriend", totalweight);

// console.log(cat.name,cat.activities);

// Array Distructuring
// let arr=[1,2,3,4,5];
// let [a,b,c,d,e]=arr;
// console.log(a,b,c,d,e);

//rest operator.
// function abc(...x){  // it gives an array structure
//     console.log(x);
//     console.log(x[0]);
// }
// abc(1,2,3,4,5);

//write afunction that will takes a number of items bu using arrow function.
// total even numbers.

// let countEven = 0;
// let sumofEven=0;

// const abc = (...x) => {
//   for (let j = 0; j< x.length; j++) {
//     if (x[j] % 2 == 0) {
//       countEven++;
//       sumofEven+=x[j];

//     }
//   }
//   console.log("Number of even numbers:", countEven);
//   console.log("Sum of even numbers:", sumofEven);
// };

// abc(1, 2, 3, 4, 5, 6);

//print greater than 3.
//const abc = (...x) => {
//   for (let j = 0; j< x.length; j++) {
//     if(x[j]>3){ // represent that x[j] is greater than 3
//       console.log(x[j]);
//     }
//   }
// }
// abc(1, 2, 3, 4, 5, 6);

// find the sum less than 4.
let sum = 0;
const xyz = (...x) => {
  for (let j = 0; j < x.length; j++) {
    if (x[j] < 4) {
      sum += x[j];
    }
  }
  console.log(sum);
};

xyz(1, 2, 3, 4, 5, 6);
