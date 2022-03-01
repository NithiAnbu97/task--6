// console.log("hey Ammu")

// Part 1: Find the culprits and nail them — debugging javascript

//  1. Find the culprit and invoke the alert

//  wrong one
// alert(“I’m invoked!”);

// corrected one
//   alert('I’m invoked!');



//   2.   Explain the below how it works
// alert("I'm JavaScript!");
// alert('Hello') // this line is not having semicolon
// alert(`Wor
//  ld`)
// alert(3 +
// 1
// + 2); // this is multiple line code and its working


// step 1 : according to this , first alert box will open when we run code
// step 2 : after that 2nd alert box will open
// step 3: 3rd alert will print but the world doesn,t print as single word 
// step 4 : finally last alert box combine the values print it in the pop up box


//  3. Fix the below to alert Guvi geek

// let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// admin = fname+lname;
// alert( admin ); // "Guvi geek"

//  4. Fix the below to alert hello Guvi geek

// let fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// let name = fname+lname;
// alert('hello ${name}');

//  5.Fix the below to alert sum of two numbers

// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(a + b);

//  6. How to get the success in console.

// let a = prompt("Enter a number?");
// //Don't modify any code below this
// if (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
//  console.log( "Success" );
// }


//  7. Fix the code to welcome the Employee

// let login = 'Employee';
// let message = (login === 'Employee') 
//   (login == 'Director') ? 'Greetings' :
//   (login == '') ? 'No login' :
//   '';
// console.log(message);

//  8. Change the code to print even numbers

// for (let num = 2; num <= 20; num += 2) {
//     console.log(num)
//   }

//  9. Fix the code to welcome the boss

// let message;
// if (null || 2 || undefined )
// {
//  let message = "welcome boss";
// }
// else
// {
//  let message = "Go away";
// }
//   console.log(message);

// 10. Change the code to print

// let i = 3;
// while (i) {
//   console.log( i-- );
// }

//  11. Change the code to print all the gifts

// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//   console.log(`Wrapped ${'gifts[i]'} and added a bow!`);
// }

//  12. Fix the code to disarm the bomb.

// let countdown = 100;
// while (countdown > 0) {
//   countdown--;
//   if(countdown == 0)
//   {
//    console.log("bomb triggered");
//   }
//   else{
//       console.log("bomb disarmed")
//   }
// }
