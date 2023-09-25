// console.log("App js script loaded");


// // Call by value vs call by ref
// // setTimeout
// // Promises




// // Web APIs
// const interval = setInterval( ()=>{ console.log("Function called...")} , 1000 )

// setTimeout(()=>{ clearInterval(interval) }, 10000);

// //-------------------------

// // localStorage and session storage
// //localStorage.setItem('password', 'abjhskdjah');

// // Inside any JS obj, we can write properties and methods
// // What are properties? 
// const animal = {
//   numberOfLegs: 4,
//   hasTail: true,
//   makeSound: ()=>{ console.log('some sound')}, // method
//   habitat: {
//     area: 'forest'
//   }
// }

// // How do we call/access them?
// animal.makeSound();

// let pass = localStorage.getItem('password');
// console.log(pass);


// //

// fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5731338&lng=73.8789445&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING').then((response)=>{
//   // Write My logic here


// }).catch((error)=>{ console.log(error)}); // 1 sec or 1 min

// console.log("After fetch call...");


// // Promises can be used to make some calls async in nature
// // If we have identified some steps in algorithm, which may take time for processing. like fetching data, saving/updating data in database

// // In such cases, we will use promises


// // STep1:

// // Create some button/HTML content on screen
// // Some user actions
// // Based on user actions we need to fetch some data
// // Based on user input/actions, we neeed to do some computation ()

// function func1 (resolve, reject) {
//   // Write the contract /condition for promise

//   // Do some operation/compatation
//   // let sum = add(2, 4); 
//   //
//   // 
//   // If (sum !== 0) // success condition
//   // resolve();

//   // if (sum === 0) // failure condition
//   // reject();

// }

// let p2 = new Promise(func1);



// let p1 = new Promise((resolve, reject)=>{
//   // Write the contract /condition for promise

//   // Do some time consuming/costly operation/compatation
//   // let sum = add(2, 4); 
//   const sum  = 10;
//   //
//   // 
//   if (sum !== 0) // success condition
//     resolve();

//   if (sum === 0) // failure condition
//     reject();

// });

// // If p1 is success, then what to do?

// p1.then(function() {
//   // list of instructions
//   console.log("Success...")
// })


// // If p1 is failure, then what to do?
// let failureFunction = function() {
//   //
//   // list of instructions
//   console.log("Failure")
// }
// p1.catch(failureFunction);


// // building some HTML elements in the page


// // Calling an API which returns a promise




// // Design an API (Google)
// // As an API designer
// const computeAITextFromSpeech = function(voicerecordingArg) {
//   console.log("computeAITextFromSpeech function called")

//   let p1 = new Promise((res, rej)=>{
//     // check if input is correct
//     // if not then reject();

//     // Do some time consuming/costly operation/compatation
//     // 

//     resolve();
//   });
//   return p1;
// }


// // As a API caller/consumer
// let voicerecording = "voicefile";
// const aiText =  computeAITextFromSpeech(voicerecording);
// aiText.then(()=>{})
// aiText.catch(()=>{})



const p3 =  fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5731338&lng=73.8789445&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
p3.then((data1)=>{
  console.log("Success")
})
p3.catch(()=>{
  console.log("Failed")
})









