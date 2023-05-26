
// live server Alt+L  Alt+O

// *****variables is in mdn console
//var Name = "anna";
//var Name = " pedro";

//console.log(Name);

// **** data types string, numbers,boolean,null, und
//const Name = "pedro";
//const Age = 19;
//const Rating = 49.3;
//const isComplete = true;
//const Val =null;
//const unk = undefined;
//const Library = "Manila Library";

//console.log(typeof unk);
//let Library;
//Library = "Manila Library";
//console.log(typeof Library);

const Name = "pedro";
const Age = 29;

//let String = "my name is " + Name+" and my age is " + Age;
//console.log(String);

let String = `My name is ${Name} and my age is ${Age}`;
//console.log(String);

//console.log(Name.length); //5 length of pedro
//console.log(Name.toLocaleLowerCase(Name));
//console.log(Name.toLocaleUpperCase(Name));


// *****Arrays
const Fruits = ["mangga","banana","grapes","pinya"];
//Fruits[4]="santol";
//Fruits.push("mansanas");
//Fruits.unshift("sineguelas"); // sa unahan siya malalagay
//Fruits.pop();// delete the last value
//Fruits.splice(1,1); //will remove index 1 =banana
//console.log(Fruits);
//console.log(Array.isArray(Fruits)); // return the value if it is an array
//console.log(Fruits.indexOf("banana")); // 1, the index number of banana


//console.log(Fruits[2]); //grapes

// **** object literals //install bracket Pair Colorizer

const tao = {
    firstName:'pedro',
    lastName:'galvantes',
    age:17,
    favorites:['apple','blue','english','music'],
    familyMembers:{
        father:'pedro sr.',
        mother:'nena penduko',
        sister:'lina penduko'
    }
};
//console.log(tao);
// now let us access this data
//console.log(tao.firstName); //pedro
//console.log(tao.firstName,tao.lastName) ;//pedro galvantes
//console.log(tao.favorites[3]); //music
//console.log(tao.familyMembers.sister); //lina penduko
//{ ** mga object **} [** mga array **]

const Contacts = [
    {
        id: 1,
        fullName:"pedro galvantes jr.",
        isSaved:"phone"
    },

    {
        id: 2,
        fullName:"pedro galvantes sr.",
        isSaved:"sim"
    },

    {
        id: 3,
        fullName:"lina penduko",
        isSaved:"memory card"
    }
];

//console.log(Contacts); // lahat ng data

//console.log(Contacts[1].fullName); //pedro galvantes sr.

// ***Loop ***//
// *** for loop *** //

for (let i = 0 ; i <= 10 ; i++) {
    //console.log(i);
}  // returns 0 - 10

// *** while loop *** //

let i = 0 ;
while(i < 10) {
    //console.log(`while loop ang value ay ${i}`); //back tick yun
    i++;
}    // while loop ang value ay 0-9


for (let i = 0 ; i < Contacts.length; i++) {
    //console.log([i]);  //returns 0 - 2
    //console.log(Contacts[i].fullName); //returns fullName of  all Contacts Data
    //console.log(Contacts[i].id); // returns 1,2,3 id numbers

}   

// *** more optimize to loop data *** //
//***for of  ***//

for(let contact of Contacts) {
    //console.log(contact); // returns all the data in Contacts and their attributes
    //console.log(contact.fullName); // returns all data's fullName
    //console.log(contact.id); // returns 1,2,3 id numbers
}  

// ** forEach **// the same as for of // but for of is recommended
Contacts.forEach(function(contact){
    //console.log(contact.fullName); // returns all data's fullName
});

// *** map **//

const ContactsFullName = Contacts.map
(function(contact){
    return contact.fullName;
});
//console.log(ContactsFullName); // returns an array objects

// *** filter ***//
const ContactsPhone = Contacts.filter
(function(contact){
    return contact.isSaved == "memory card";
    /// puwedeng dugtungan ang mga function // connecting functions
}).map(function(contact){
    return contact.fullName;
});
//console.log(ContactsPhone); // returns the array fullName of lina penduko



//console.log(ContactsPhone); // returns data lina penduko and details

const ContactsJSON = JSON.stringify
(Contacts);
//console.log(ContactsJSON); // returns JSON stringify format w/c sometimes API requieres para ipasok sa kanilang server


// *** conditionals **** //

//const x = "100";

//if (x === 100) {
    //console.log("its 100");
//}else {
    //console.log("not 100");
//}  // returns "its 100 if x == 100" but "not 100 if x === 100" "=== means identical check the value and the datatypes"

/// **** else if *** ///

//const x = 300;

//if (x === 100) {
    //console.log("its 100");
//}else if(x > 200){
  //  console.log("value is greater than 100");
//}else {
    //console.log("not 100");
//} // returns the value is greater than 100 


//const x = 300;

//if (x === 100 || x > 200) {
    //console.log("true");
//}else {
    //console.log("not 100");
//} // returns "true because though its not ok in x===100 but ok in x > 200"

// *** function types *** // 

//let y = 100;
//let z = 200;

//function GetSum(y,z){
  //  return y + z;
//}
//console.log(GetSum(y,z));// return 300

// *** ES6 method *** -- arrow functions//
//const GetTotal = (y,z) =>y+z;

//console.log(GetTotal(100,300)); // return 400

//const GetSum = (x,y) =>{
   // return x+y;
//};
//console.log(GetSum(100, 400)); // return 500

//** OOP */ Class /ideally capital letter starts

// class Tao{
//     constructor(firstName,lastName,bt){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.bt = bt;
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
// } 

// // instantiate object //

// const tao1 = new Tao("pedro", "Penduko", "A");
// const tao2 = new Tao("nena", "sabel", "B");

//console.log(tao1);/// returns Tao {firstName: 'pedro', lastName: 'Penduko', bt: 'A'}
//console.log(tao1.firstName); // returns pedro
//console.log(tao1.getFullName()); // returns pedro Penduko
//console.log(tao2);

// // *** constructor function ***//
// function Pipol (firstName,lastName, bt){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.bt = bt;

//     this.getFullName = () => {
//         return `${this.first} ${this.lastName}`;
//     }
// }
// // // instantiate object //

// const pipol1 = new Pipol("pedro", "Penduko", "A");
// const pipol2 = new Pipol("nena", "sabel", "B");

// console.log(pipol1.getFullName()); // returns pedro Penduko
// console.log(pipol2);// return Pipol {firstName: 'nena', lastName: 'sabel', bt: 'B', getFullName: ƒ}bt: "B"firstName: "nena"getFullName: () => {…}lastName: "sabel"[[Prototype]]: Object


// *** DOM Selection *** //
//  const Form = document.getElementById("myForm");
//  const Form2 = document.querySelector("myForm");

// const Inputs =document.querySelectorAll(".container");

// console.log(Inputs);

// Inputs.forEach(function(input) {
//     console.log(input);
// });

// *** DOM Manipulation *** //

// const Form = document.getElementById("myForm");
//  const Form2 = document.querySelector("myForm");

// const Inputs =document.querySelectorAll(".container");

const ul = document.querySelector(".items");
//ul.remove(); tatangalin lahat ng items
//ul.lastElementChild.remove(); tatangalin yung last data
//ul.firstElementChild.remove(); unang data tatangalin
//console.log(ul);

 ul.firstElementChild.textContent = " j.santos";
 ul.children[1].innerText = "hi";
 ul.lastElementChild.innerHTML = "<h1>big</h1>";

// const btn = document.querySelector("#btn");
// btn.style.background = "blue"; // just put an id="btn" in login button in index.html so we can manipulate the button


// *** DOM events *** //

// const btn = document.querySelector("#btn");

// btn.addEventListener("click",function(e){      // e means event
//     e.preventDefault();
//     console.log("button was clicked");
// });

// const btn = document.querySelector("#myForm");


// btn.addEventListener("click",function(e){      // e means event//
//     e.preventDefault();
//     console.log("button was clicked");
//     Form.style.background = "black";
// });


const btn = document.querySelector("#btn");
const Form = document.querySelector("#myForm");
const Username =document.querySelector("#uname");
const Password = document.querySelector("#psw");
const Msg = document.querySelector("#msg");


btn.addEventListener("click",function(e){ 
    e.preventDefault();
    

    if (Username.value.length === 0 || Password.value.length === 0) {
        console.log("False");
        Msg.innerHTML = " <h4 class = 'error'> Please complete the details </h4>";
        setTimeout(() => document.querySelector(".error").remove(), 3000);
    }else {
        console.log("True");
        Form.submit();
    }

});