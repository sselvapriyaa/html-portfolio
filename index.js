//let age = "15";
//console.log(typeof age);

// Scoped Demonstartion
/*let a = 5; b = 10;
if(a > b){
    let c = 50; //Scope of c is only within the if block
}
else{
    let c = 100;
}*/
//console.log(c);

//Reclaration is not allowed in let
/*let user = "John";
let user = "Mike";
console.log(user); */

//Reclaration is allowed in var
var user = "John";
var user = "Mike";
console.log(user); 

let userProfile; //Camelcase

//Constant variable;
const COLOR = "red";
//COLOR = "blue";
console.log(COLOR);
console.log(5/10);//
console.log(5/0);// Infinity
console.log("Test"/0);// NAN

//let a = 10, b = 20;
//console.log(`Sum of a and b is: ${a+b}`);//use backtick from keyboard Expression is always followed by $
/*console.log("Sum of a and b is: ${a+b}");*/

//let age = 8 > 9;
/*let age = null;*/
//console.log(typeof age);

let age = "Test";
console.log(typeof(age));

//console.log("Value of a is: " +a +" ,Value of b is: " +b);

console.log(5 == "5"); //compare 5 as a string with "5"
console.log(5 === "5"); //strick equals compare both datatype and var
console.log("5" === "5");//Assignment
console.log('5' === "5");

//let a = 10;
//console.log(++a); //pre increment
//console.log(a++); //a++ (post increment): a = a+1;
//a++;
//console.log(a);

// if- else
/*let age = 18;

if(age > 18 && age  > 59){
        console.log('Eligible to vote and pension');
   
} else if(age < 60){
    console.log("Won't get a pension now");
}
else if(age===18){
    console.log("You turned 18");
}
else{
    console.log('Not Eligible to vote');
}*/

/*switch (age){
    case 18:
        console.log('You turned 18'); 
        break;
        case 19:
        console.log('Eligible to vote'); 
        break;
        default:    
        console.log('No match');
    }*/

    //while loop: 1 intiatization, 2.conditiion

  //let count = 0;
  //while(count < 15){

      //console.log(count);
      //count++;

      /*let count;
      for(count = 0; count < 15; count++){
      if(count === 10){
          continue;
      }
      console.log(count);
      //count++;
    }*/

  /*do{
    console.log(count);
    count++;
  } while(count < 5);*/

      

   let str = 'Hi how are you?';
   //str[0] = 'hi';
   //console.log(str[0]);

   console.log(str.substring(3,10)); //start index, length of original string
   console.log(str.substr(3,10)); // start index end index


/*random_number = Math.floor(Math.random()*10) + 1
console.log(random_number);*/

let names  = ["John", "Mike", "Peter", "Kevin"];
for(let i = 0; i < names.length; i++) {
    /*if(names[i].startsWith('P')){
        continue;
    }*/
    console.log(names[i]);
  }
//console.log(names[1]);//
//console.log('Array Length ' +names.length);
    console.log('Before: ' +names);
    //console.log(names.pop());
    console.log(names.shift());
    console.log('After Shift:' +names);

    //console.log('After:' +names);
    //console.log(names.push('Sara'));
    console.log(names.shift('Sara'));
    console.log(names.unshift('Sara'));

    console.log('After Unshift:' +names);
    console.log(names);
    //console.log(names.slice(1,3));
    //console.log(names.slice(0,3));

    let newNames = names;
    newNames.push('Raymond');
    console.log('After:' +names);

    /*for(let name in names){
        console.log(name);
    }*/

    for(let name of names){
        console.log(name);
    }

    /*names.length = 3;
    console.log('After manipulating the length: ' +names)*/
    names[36] = 'Test';
    console.log('After manipulating the length: ' +names);
    console.log(names.length);

    /*let hello = function(){ // function hello(){}
        console.log('Hello');
    }
    console.log(typeof hello);

    hello();*/
    /*let test = function(){
        console.log('Arrow function demo');
    }*/
    let test = function(a,b){
        let c = a+b;
        return c;
        console.log('Arrow function demo');

    }
    /*let test1 = (a,b) =>{
        let c = a+b;
        return c;
        //console.log('Arrow function demo');

    }*/
    //add(8,9);
    //let test1 = () => console.log('Arrow function demo');
    //let test1 = (a, b) => console.log(a+b);
    //let test1 = (a, b) => {let c = a+b};

    let test1 = (a,b) => {
        let c = a+b;
        return c;
    }
     
    console.log(test1(12,23));
    console.log(typeof test1);
    //test1();
   // test1(12,90);
    let numbers = [12,23,18,26,40];

    let evenNumbers = numbers.filter(getEven);

    function getEven(num){
        return num%2 == 0;
    }   
    console.log('Filteres :' +evenNumbers);
    console.log('Original ' +numbers);

    let squaredNum = numbers.map(getSquared);

    function getSquared(num){
        return num*num;
    }
console.log('Squared: ' +squaredNum);

let sum = numbers.reduce(getSum, 0);
function getSum(total, num){
    return total+num;
}
console.log("Sum of all numbers: " +sum);

let person = {
    firstName: 'Selva',
    lastName: 'Priya',
    play:()=>{
        console.log('All time greats');
    }
};

//console.log(typeof person);
console.log(person.firstName + " " +person.lastName);

person.country = 'India';
console.log(person);
console.log("Before: " ,person);

//delete person.country;
//console.log("After: " ,person);
//console.log(age in person);
/*console.log('lastName' in person);

for(const key in person){
    console.log(key+ ": " ,person[key]);
}
person.play();*/

/*function Person(firstName,lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
} */
function Person(firstName,lastName, age){ //Constructor function
    this.firstName = firstName;
    this.lastName = lastName;
    //age = age;//undefined
    this.age = age;
    this.getInfo = function(){
        return this.firstName + " "+ this.lastName +" "+ "age: "+ this.age;
    };

}

let person1 = new Person('Peter','Waugh', 34);
let person2 = new Person('Peter','Waugh', 31);
let person3 = new Person('Peter','Waugh', 38);

//console.log(person3.age);
console.log(person2.age);
console.log(person1.firstName);
console.log(person1.getInfo()); 
//calling ananomous function
var js = (function(x) {
    return x*x;
}
(10)); 
console.log(typeof js);
console.log(js);

let num = Math.floor(Math.random() * 50) +1;

console.log(num);








  
  
  
  


   




  





