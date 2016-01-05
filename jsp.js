"use strict";
/*var totalincome = (wage * hours);
var regtime = (wage * hours);
var overtime = ((wage * 1.5) * (hours - 40) + (wage * 40));
var ot = 1.5;*/
function otpay(wage,hours,ot){
	
	Math.round(totalincome*100)/100;
	return ((wage * ot) * (hours - 40) + (wage * 40)); 
	
};



function regpay(wage,hours){
		
	return wage * hours;
	
};



function PayMe(person1,ot1,wage1,hours1){
		var person1 = prompt("Please enter your name");
		var hours1 = prompt("Please enter your hours");
		var wage1 = prompt("Please enter your wage");
		var ot1 = 1.5
	if (hours1 > 40 ){
		
	otpay = ((wage1 * ot1) * (hours1 - 40) + (wage1 * 40)); 
	
	console.log("hello " + person1 + " your total income plus overtime is " + otpay);
}else{
	regpay = (wage1 * hours1)
	console.log("hello " + person1 + " your total income with no overtime is " + regpay);
};
};

PayMe(otpay,regpay)



/*if (hours > 40 ){
	totalincome = ((wage * ot) * (hours - 40) + (wage * 40)); 
	Math.round(totalincome*100)/100;
	console.log("hello " + person + " your total income is " + totalincome)
}else{
	totalincome = (wage * hours)
	console.log("hello " + person + " your total income is " + totalincome)
};*/