
// let kelvin =['patrick', 'Javascript', 'react', 'Angular', 'mongo', 'mongo','kelvin', 'data','data,react','jude']
// let user = kelvin.find(name=>name='react');
// console.log(user);

// function greeting(){
//     console.log('Good Afternoon');
    
// }
//  let greeting = ()=>{

//     console.log('Good Afternoon');
    
//  }


// greeting();
// greeting();

// document.getElementById('button').addEventListener('click',loadInfo);
// function loadInfo(e){
  
//    const xhr = new XMLHttpRequest();

//    //open
//    xhr.open('GET','data.txt',true)

//    //onload method
//    xhr.onload = function(){
//       if(this.status ===200){
//          console.log(this.responseText);
         
//       }
//    }
//    xhr.send();
   
// }

// document.getElementById('button').addEventListener('click',getCustomers);

// function getCustomers(e){
//    const xhr = new XMLHttpRequest();

//    xhr.open('GET','cutomer.json',true);

//    xhr.onload = function(){
//       if(this.status ===200){
//          // console.log(this.responseText);
//          const customer = JSON.parse(this.responseText);
//          console.log((customer));
         
//          const output = `
//          <ul>
//          <li>ID:${customer.id}</li>
//          <li>name:${customer.name}</li>
//          <li>lastName:${customer.lastName}</li>
//          <li>phone:${customer.phone}</li>
//          </ul>
//          `;

//          document.getElementById('customer').innerHTML = output;
//       }
//    }
//    xhr.send();

// }

// const posts =[
//    {title:'titile', body:'body1'},
//    {title:'titile2', body:'body2'},
// ]
