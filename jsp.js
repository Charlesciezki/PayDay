"use strict";
var hours;
var wage;
var totalincome;
var person;
var regtime;
var overtime;
regtime = (wage * hours);
overtime = ((wage * 1.5) * (hours - 40));

totalincome = hours * wage;
var person = prompt("Please enter your name");
var hours = prompt("Please enter your hours");
var wage = prompt("Please enter your wage");
if (hours > 40 ){
	
	totalincome = ((wage * 1.5) * (hours - 40) + (wage * 40)); 
	Math.round(totalincome*100)/100;
}else{
	totalincome = wage * hours
	
};

console.log(totalincome);
console.log("hello " + person + " your total income is " + totalincome);
