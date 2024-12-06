// String is a collection of characters
// String is immutable
// String is an object
// String is a primitive data type
// String is a value type

//   let name = "upendra hello";
// //  console.log(name.length);
//   console.log(name[0]);
//  // console.log(name[12]);
//   console.log(name.length-1);

//     let name="hello"
//   for(let i=name.length-1;i>=0;i--){
//     console.log(name[i]);
//   }

// let name="hello"
// for(i=0;i<name.length;i++){
//   console.log(name[i])

// }
//concat

//     let firstname="Ram";
//     let lastname="shyam";
//     let fullname=firstname+" "+lastname;
//    console.log(fullname);
//     //let fullname = firstname.concat(lastname);
// console.log(fullname);

//template literal
let x = 5;
let y = 6;
let message = `sum is ${x + y}`;
console.log(message);
console.log(message.length);

//  str = "hello how are you"
//  str1 = "insane"
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());// white space remove
// console.log(str1.replace("insane", "trex"));
// console.log(str.slice(0,4));// part separation
// console.log(str1.charAt(4));
// console.log(str.startwith("h"));

//wap that counts how many times letter 'e' appears in the string "hello Everyone".
// let str="hello everyone";
// let count =0;
// for(let i=0;i<str.length;i++){
//   if(str[i]=="e"){// check if the current  character is "e"
//     count++;

//   }
// }
// console.log(count);

//wap that checks if a stirng starts with "h" and ends with "e" using if else.
// let str="hello everyone";
// if(str[0]=="h" && str[str.length - 1]=="e"){// denote first and last character
//   console.log("yes");
// }
// else{
//   console.log("no");
// }

//       let str = "hello";
// if (str[str.length - 1] === 'o') {
//     console.log("The string ends with 'o'.");
// } else {
//     console.log("The string does not end with 'o'.");
// }

//wap that loops through a strng and prints only upper case characters.
//  let str="Hello Everyone";
//  for(let i=0;i<str.length;i++){
//   if(str[i]>="A" && str[i]<="Z"){
//   //if(str[i]==str[i].toUpperCase()){// check if the character is uppercase
//     console.log(str[i]);
//   }
//  }
//  wap that replace every occurance of "hello" with "hi".
// let str="hello everyone";
// let newstr= str.replace("hello", "hi");
// console.log(newstr);

// create a program that counts the number of vowels in a string.
//  let str="education";
//  let count =0;
//  for(let i=0;i<str.length;i++){
//   if(str[i]=="a" || str[i]=="e" || str[i]=="i" || str[i]=="o" || str[i]=="u"){
//     count++;
//  }
//  }
//  console.log(count);

//wap that use loops to concatnate the first letter of each word in a string.
// let str ="hello everyone";
// let newstr =str[0];
// for(let i=0;i<str.length;i++){
//   if(str[i]===" "  && i+1<str.length){
//     newstr = newstr + str[i+1];
//   }
// }
// console.log(newstr);
