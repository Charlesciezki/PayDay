"use strict";
function otpay(wage,hours,ot){
	
	return ((wage * ot) * (hours - 40) + (wage * 40)); 
	Math.round(totalincome*100)/100;

};



function regpay(wage,hours){
		
	return wage * hours;
	
};


	var person = prompt("Please enter your name");
	var hours = prompt("Please enter your hours");
	var wage = prompt("Please enter your wage");




var totalincome = (wage * hours);
var regtime = (wage * hours);
var overtime = ((wage * 1.5) * (hours - 40) + (wage * 40));
var ot = 1.5;




if (hours > 40 ){
	totalincome = ((wage * ot) * (hours - 40) + (wage * 40)); 
	Math.round(totalincome*100)/100;
	console.log("hello " + person + " your total income is " + totalincome)
}else{
	totalincome = (wage * hours)
	console.log("hello " + person + " your total income is " + totalincome)
};






