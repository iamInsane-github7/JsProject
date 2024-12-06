//let arr = [1, 2, 3, 4, 5, 6, 7];
// //let slice = arr.slice(2, 5);

// let splice =arr.splice(1,3,3);
//  console.log(splice);
//  console.log(arr);

//console.log(arr.toString());
//let arr2=[6,7,8,9,10];

//arr.shift();
//arr.unshift(0);
//arr.slice(7,8);
//arr.push(6);
//arr.pop();

//console.log(arr.concat(arr2));
//let sum=0;
// for(let i=0;i<arr.length;i++){
// sum=sum+arr[i];
//}
// for(let i=arr.length-1;i>=0;i--){
//     console.log(arr[i]);

// }

//for(i=0;i<arr.length;i++){
//console.log(arr[i])
//console.log(arr.length);
//console.log(arr[2]);
//}

1; //write a function that filter even number from an array.
//    let arr=[1,2,3,4,5,6,7,8,9,10];
//    let evenarr=[];
//    for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         evenarr.push(arr[i]);
//     }
//    }
//    console.log(evenarr);

2; //give an array of string, filter out the  string thar have more than 5 character.
//          let arr=["ram","shyam","hari","sita","gita"];
//          let arr2=[];
//          for(let i=0;i<arr.length;i++){
//             if(arr[i].length>3){
//                 arr2.push(arr[i]);
//             }
//          }
//          console.log(arr2);

//          let arrays = ["apple", "banana", "elephan", "dog"]; // Input: [apple, banana, elephan, dog]
// let longArrays = arrays.filter(arr => arr.length > 5);

// console.log(longArrays);

3; //give an array of boolean values filter out the true values
//     let arr=[true,false,true,false,true,false];
//     let arr2=[];
//     for(let i=0;i<arr.length;i++){
//     if(arr[i]==true){
//         arr2.push(arr[i]);

// }}
//   console.log(arr2);

4; //convert an array of number into an array of string using map.
//   let arr=[1,2,3,4,5,6,7,8,9,10];
//   let arr2=[];
//   for(let i=0;i<arr.length;i++){
//     arr2.push(arr[i].toString());

//   }
//   console.log(arr2);

//multiply each element by 5 by using for each loop.
//  let arr=[1,2,3,4,5,6,7]

//  let sum =0;

//  arr.forEach(element=> {

//   if(element%2==0){
//     sum = sum+element;
//  // arr2.push(element*5);
//   //console.log(element*5);

//   }})
//    console.log(sum);

//   //console.log(arr2)

// Filter.
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let filterarr=arr.filter((items)=>{  // callback functions or functions expression.
//   return items%2==0;
// })
// console.log(filterarr);

// arrow function
// const sum =(a,b)=>{
//   console.log(a+b);
// }
// sum(4,5);
// let sum =a=>a+5;
// let x=sum(5);
// console.log(x)

// let sum =()=> {
//   console.log("sum");
// }
// function xyz(a){
//   console.log("xyz");
//   a();
// }
// xyz(sum);

// write a function that take a function that will calculate the sum of two number.
// let sum =(a,b)=>{
//   console.log(a+b);
// }
//  function xy(ab){
//   //console.log("xy");
//   ab(1,3);
// }

// xy(sum);

//map.
// let arr=[1,2,3,4,5,6,7,8,9,10];
// let maparr=arr.map((items)=>{  // callback functions or functions expression.
//   return items*2;
// })
// console.log(maparr);

5; //  write an function that convert an array of strings to uppercase using map.
// let arr= ["ram","shyam","hari","sita","gita"];
// let maparr= arr.map((items)=>{
//   return items.toUpperCase();
// })
// console.log(maparr);

6; //use for each to log each element  of an array in the console.
//  let arr=[1,2,3,4,5,6,7,8,9,10];
//  arr.foreach((items)=>{
//    console.log(items);
//  })

7; //write an function that use 'forEach' to calculate the sum of an array of numbers.
//  function sum(numbers) {
//   let sum=0;
//   numbers.forEach((number)=>{
//     sum=sum+number;
//   })
//   return sum;

//   }
//   let numbers=[1,2,3,4,5,6,7,8,9,10];
//   console.log(sum(numbers));
// using array method
//  let arr=[1,2,3,4,5,6,7,8,9,10];
//  let sum=0;
//  arr.forEach((items)=>{
//    sum=sum+items;
//  })
//  console.log(sum);

8; //use foreach to multiply each element of an array by 2.
// let arr=[1,2,3,4,5,6,7,8,9,10];
// arr.forEach((items)=>{
//   console.log(items*2);
// })
9; // use foreach to add an exclamation mark to each string in an array and log  the new string.
//  let arr= ["ram","shyam","hari","sita","gita"];
//  let arr2=[];
//  arr.forEach((items)=>{
//    arr2.push(items+"!");
//  })
//  console.log(arr2);

10; // use foreach to concatenate all the strings in an array into a single string and log it.
//  let arr= ["ram","shyam","hari","sita","gita"];
//  let arr2="";
//  arr.forEach((items)=>{
//   arr2=arr2+items;
//  })
//  console.log(arr2);

sum();
function sum() {
  console.log(2);
}
