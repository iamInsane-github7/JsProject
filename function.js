// function average(x,y){

//     return (x+y)/2

// }
//  let a=4;
//  let b=6;
//  console.log("average of a and b is",average(a,b));
//console.log(10.7%1);
//console.log(math.round(.699));

/*************  ✨ Codeium Command 🌟  *************/
//write a function uses for loop to print number from 1 to 10.
//    function printNumbers() {
//     if (typeof printNumbers !== 'function') {
//         throw new Error('printNumbers is not a function');
//     for (let i = 1; i <= 10; i++) {
//         console.log(i);
//     }
//     for (let i = 1; i <= 10; i++) {
// }

// Call the function
// printNumbers();

//to calculate and return the sum of the first n natural numbers.
//  function sumofNaturalNumber(){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum=sum+i;
//     }
//     return sum;
//  }
//   let n=10;
//   console.log("the sum of the first 10 natural numbers is",sumofNaturalNumber(n));

// print all even number from 1 to 20
//   function EvenNumber(){
//     for(let i=1;i<=20;i++){
//         if(i%2==0){
//             console.log(i);

//   }
// }
//   }
//   EvenNumber();

//calculate and return the factorial of a given number'n'.
//   function factorial(n){
//     let fact=1;
//     for(let i=1;i<=n;i++){
//         fact=fact*i;
//     }
//     return fact;
//   }
//   let n=5;
//   console.log("factorial of n is", factorial(n));

//multiplication table 5.
// function multiplicationTable(){
//     let num=5;
//     for(let i=1;i<=10;i++){
//         console.log("num x",i,"=",5*i);

//     }
// }
// multiplicationTable();

// reverse order from 1to 10.
//    function reverseOrder(){
//     for(let i=10;i>=1;i--){
//         console.log(i);
//     }
//    }
//    reverseOrder();

// print the multiple of 3 between 1 to 30.
// function multipleof3(){
//     for(i=1;i<=30;i++){
//         if(i%3==0){
//             console.log(i);
//         }
//     }

// }
// multipleof3();

// calculate and return the sum of all even from 1 to 50
// function sumOfEvenNumbers() {
//     let sum = 0;
//     for (let i = 2; i <= 50; i += 2) {//start at 2 and increment by 2
//         sum=sum+i;
//     }
//     return sum;
// }

// console.log(`The sum of even numbers between 1 and 50 is: ${sumOfEvenNumbers()}`);

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum);
