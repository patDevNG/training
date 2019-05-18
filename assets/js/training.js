// let Instructor = 'Patrick';
// let TrainningCenter = 'Projaro';

// console.log( Instructor +" " +"is and Instructor in "+""+ TrainningCenter);

// Instructor ='Mr Emmanuel';
// console.log(Instructor);

// Instructor = TrainningCenter;
// console.log(Instructor);


// Calculating Area of a Rectangle
// let breath = 12;
// let length =10;
// let Area = length * breath;
// console.log(Area);
// let num1 = document.getElementById("Number1").addEventListener(onclick,getName());
// getName=()=>{
//     let 
// }
// console.log(num1);


// let age =10;
// if(age>18){
//     console.log('welcome');
    
// }else{
//     console.log('Go away');
    
// }

// if else

// let age = 18;

// if(age>= 18){
//     console.log('You are an Adult');
    
// }else{
//     console.log('You are too young to use this app');
    
// }



// let age = 1000;

// switch(age){
//     case 0:
//     console.log('age is 0');
//     break;
//     case 12:
//     console.log('Hello');
//     break
//     case 23:
//     console.log('you are welcome');
//     break;

//     default:
//     console.log('No age range found');
    
// }

//counting from 1-10

// for(let i=1; i<=10;i++){
//     console.log(i);
    
// }
// let i = 2;
// while(i<=10){
//     console.log(i);
    
// }
// let i = 1;

// do{
//     console.log(i);
    
// } while(i)



// while(i<=10){
//     console.log(i);

//     i++;
// }

// do{
//     console.log(i);

//     i++;
    
// }while(i<=10);

// let snacks = ['doughnut','eggroll','meatpie']
// console.log(snacks);

// for(let i = 0; i<=snacks.length-1; i++){
//     console.log(snacks[i]);
    
// }

// snacks.push('princess');
// console.log(snacks);

// snacks.unshift('princess');
// console.log(snacks);

// snacks.pop('princess');
// console.log(snacks);
//  snacks.shift();
//  let a,b;

// function addittion( a, b){
//     return a+b;

// }
// console.log(addittion(12,13));

// let addition = (a,b)=>{
// let total = a+b;
// //  
    
// }

// console.log(addition(12,13));


// class shop{
//    constructor(name)
//    {
//       this.name = name;

//    }
// }
// const mynewShop = new shop();
// console.log(mynewShop)

// class Trainee{
//    constructor(firstName, lastName, phone){
//       this.firstName=firstName;
//       this.lastName =lastName;
//       this.phone = phone;
//    }
//    sayHi(){
//       console.log(`Hi ${this.firstName} ${this.lastName} to projaro`);
      
//    }
// }

// let pincess = new Trainee('princess','javascript','090889876');
// let kelvin = new Trainee('kelvin','sapp', 'nodejs')

// console.log(pincess.sayHi());
// console.log(kelvin);


// class NumberController{

//    addNumber(firstNumber, LastNumber){
//       return firstNumber+LastNumber
//    }

//    subtractNumbers(firstNumber, lastNumber){
//       return firstNumber - lastNumber;

//    }

//    static multiplyNumber(firstNumber, lastNumber){
//       return firstNumber *lastNumber;
//    }
// }

// const numberOperation = new NumberController;
// const ptt = new NumberController;
// console.log(numberOperation.subtractNumbers(70,30));
// console.log(NumberController.multiplyNumber(3,9));

//  class Employee{
//     constructor(firstName, lastName, id){
//        this.firstName = firstName;
//        this.lastName = lastName;
//        this.id = id;
//     }

//     getFullName(){
//        return (`${this.firstName} ${this.lastName}`);
//     }
//  }

//  class Manger extends Employee{
//     constructor(firstName, lastName, id,position){
//       super(firstName,lastName,id);
//        this.position =position;
     
//       }
//     }
   
// let newStaff = new Employee('Damian','Javascript',01);
//  let newManager = new Manger('Damian', 'JavaScript',01, 'ClassRep ');


 
//  console.log(newStaff);
//  console.log(newManager);
 
//  {
//     fname:'Patrick';
//     lname:'Okuns';
//     email:'l@an.com'

//  }
// let Developer ={};
// let users =[
//    {id:01, name:'Smith'},
//    {id:02, name:'John Doe'},
//    {id:02, name:'Damian'},
//    {id:02, name:'princess'},
//    {id:04, name:'John Doe'},
// ]

// console.log(users.find(user => user.name =='Smith'));

// console.log(users.filter(user => user.id ==02));

// document.getElementById('mybtn').addEventListener('click',loadData);
document.getElementById("mybtn").addEventListener('click',loadData);

function loadData (e){
   console.log('kkkkkkkkk');

   let http = new XMLHttpRequest();

   http.open('GET','data1.txt', true);

   http.onload=function(){
      if(this.status ===200){
         console.log(this.responseText);
         document.getElementById("result").innerHTML = `
         <h1>${this.responseText}</h1>
         `;
         
      }
   }
   
   http.send();
   
   // e.preventDefault();
}

// let loadData = (e)=>{
// console.log('clicked.......');

   
//    // let http = new XMLHttpRequest();
   

// }


