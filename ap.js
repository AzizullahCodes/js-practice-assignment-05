// Today we practice to clear our concept about "==,===,!==,!=, <,>,<=,>=,and if else statement  
// ------------------ mini-practice of(==) project-01 -------------------------- 
// var myName = prompt('Enter name');
// var name = 'aziz';
// console.log(myName == name);
// if user enter myName same like i have stored in variable name than answer 
// will come true otherwise false in console
// we can under stand  == in console direct also without creating variables 
'aziz' == 'aziz' 
// console show true if we 
'aziz' == 'azizullah' 
// console answers false 

// ------------------ mini-practice of(===) project-02 -------------------------- 
// var num = prompt('Ente number');
// var number = 24;
// console.log(num === number); 
// *********** if you enter 24 in input the answer shows false , and 24 is equal to 
//   why----? 
// var num = prompt('Ente number');
// var number = 24;
// console.log(num == number); 
// now answer shows true, why---? you know that there is a difference b/w == and === 
// == compares only value of two variable but === not compare only value but data type also 
// you know that by prompt user alway give us value in string than first we should convert in first 
// logic to number 
//  var num = +prompt('Ente number');
// var number = 24;
// console.log(num === number); 
//  now answer show true 
// ------------------ mini-practice of(!=) project-03 -------------------------- 
//  var color = prompt('Enter color name');
//  var myFavouriteColor = 'blue';
//  console.log(color != myFavouriteColor); 
//  if user enter color in prompt green console show us 
// true if user enter color in prompt blue console shows us false 

// ------------------ mini-practice of(!==) project-04 -------------------------- 
// var number = prompt('Enter number');
// var newNum = 9;
// console.log(number !== newNum); 
// console answers true why...? 
// see more 
// var number = prompt('Enter number');
// var newNum = 9;
// console.log(number != newNum); 
// console tells us false , why----- !
// (!==) have same prform its duty like (===) and you know that (===) checks 
// two conditions value and data type,similary  here !== is checking value and data type 
//  in first, logic !== checks the value value we put 9 is equal to newNum now !== checks 
// data type , that is not equal to newNum data type so console syas true 

// ------------------ mini-practice of(>,<,>=,<=) project-05 -------------------------- 
    // var num = +prompt('Enter number'); 
    // var number = 6;
    // console.log(num > 6); 
// ==== console replies true if we enter number greater than 6; but there is a most 
// ==== important point of clear concept about >,<, >=, <= ,first run your brain what i am 
// saying! 
//  you know that by pompt we always receive any number in string type now user enter 8 that is 
//  string and our logic (num > 6) , is proves wrons because the user input number 7 is string 
// than why console says true.....? 
// ******* Remember our comparison operators (>,<,>=,<=) do not care for data type 
// they check only value so i was trying to clear your concept and i hope you have understood 

// ------------------ mini-practice of(<) project-06 -------------------------- 

                // var num = prompt('Enter any number');
                // var number = 5;
                // console.log(num < 5);
// === if user enter num smaller than 5 console replies true if user enter 
//   enter num 5 or greater than 5 console replies false

// ------------------ mini-practice of(>=) project-07 -------------------------- 
                        // var num = prompt('Enter any number');
                        // var number = 8;
                        // console.log(num >= number); 
// if user enter 8 or greater than 8 consoles show true if  use enter number less than 
//  8 console replies false 

// ------------------ mini-practice of(<=) project-08 -------------------------- 
        // var num = prompt('Enter any number');
        // var number = 20;
        // console.log(num <= number);
// if user enter number 20 or less than 20 console replies true, if user enter number greater than 
//  20 conosle replies false;

// ------------------ mini-practice of(if statement) project-09 -------------------------- 
        // var color = prompt('Enter your favourite color');
        // var colorName = 'red';
        // if (color == colorName){console.log('Your answer is good');}
// you see that when user enter color red console shows, your answer is good 
// but when user enters green than console does not tell us any thing why----! 
//  we see it in next project

// ------------------ mini-practice of(if) projec- 10 -------------------------- 
//  var color = prompt('Enter your favourite color');
//  var colorName = 'red';
//  if (color === colorName) {console.log('Your answer is good');}
//  if (color !== colorName){console.log('your answer is wrong');}
//  we here applied two time if we can apply else in place of second if 
//  we see it in next project

// ------------------ mini-practice of(else) project-11 -------------------------- 
        // var color = prompt('Enter your favourite color');
        // var colorName = 'red';
        // if(color === colorName){console.log('Your answer is correct');}
        // else{console.log('your answer is not correct');}
// Now we clear our concept about else if in next pronject

// ------------------ mini-practice of(else if) project-12 -------------------------- 
    // var hobby = prompt('Enter your hobby');
    // var myHobby = 'coding';
    // if (hobby === myHobby) {console.log(myHobby + ' is my hobby');}
    // else if (hobby === 'book-reading'){console.log(hobby + ' is also my second hobby');}
    // else{console.log('you donot have knowledge about my hobby');}


// ------------------ mini-practice project-13 (even or odd) -------------------------- 
        //  var number =  +prompt('Enter any number');
        //  var divider = 2; 
        // result = number % divider;
        //  remainder = result / 2;
        //  var temp = 0;
        //  if (remainder === temp){console.log('number is even');}
        //  else{console.log('number is  odd');}
//    it logic work but we apply an another logic in project 15
// ------------------ mini-practice project-14 (remainder) -------------------------- 
// var number = prompt('Enter any number');
// var  number2  = prompt('Enter second number');
//  var remainder = number % number2;
//  console.log(remainder);
// ------------------ mini-practice  project-15 (even or odd number) -------------------------- 
        // var number = prompt('Enter any number');
        // var output = number % 2;
        // console.log(output);
        // if (output === 0){console.log(number + ' is an even number');}
        // else{console.log(number + ' is not an even number but odd number');}

// ------------------ mini-practice of project-16 (calculator) -------------------------- 
        // var number1 = +prompt('Ente first number');
        // var number2 = +prompt('Enter second number');
        // var operator = prompt('Enter any operator(*,+,- or /)');

        // if (operator == '+'){ var total = number1 + number2;
        //         console.log(total)
        // }
        // if(operator == '-'){var total = number1 - number2;
        //         console.log(total);
        // }
        // if (operator == '/') { var total = number1 / number2;
        //         console.log(total);
        // }
        // if (operator == '*') {var total = number1 * number2;
        //         console.log(total);
        // } 
        // else{console.log('Enter an operator');}
// ------------------ mini-practice project-17(weather outfit suggestion app) -------------------------- 
        // var temperature = prompt('Enter temperature');
        // if ( temperature < 30) {console.log('Temperature is low plz wear warm clothes');}
        // else{console.log('Temperature is high plaz donot go outside home');}
// ------------------ mini-practice project-18 (Grade checker) -------------------------- 
        // var marks = prompt('Enter your marks');
        // var totalMarks = 100;
        // if (marks >= 90){console.log('You got Grade A+');
        // }
        // else if (marks >= 80) {console.log('Your got Grade A');}
        // else if  (marks >= 70) {console.log('You got Grade B');}
        // else if  (marks >= 60) {console.log('You got grade C');}
        // else if (marks >= 50) {console.log('You got Grade D');}
        // else if (marks >= 40) {console.log('You are passed');}
        // else{console.log('You are failed');}

// ------------------ mini-practice project-19 (Age group classifier) -------------------------- 
        // var age = +prompt('Enter age');
        // if(age >= 60) {console.log('Yor are an old man');}
        // else if (age >= 50) {console.log('Your journey is started toward old man');}
        // else if ( age >= 40) {console.log('You have passed the golden time of your life but still you are young');}
        // else if ( age >= 20) {console.log('You are in golden period of your life');}
        // else{console.log('You are children');}

// ------------------ mini-practice project-20 (Simple login system) -------------------------- 
        // var userName = prompt('Enter user name');
        // var password = +prompt('Enter password');
        // var myName = "Aziz";
        // var myPassword = 9876;
        // if (userName === myName && password === myPassword) {console.log('you entered correct username and password & welcome you can login');}
        // else{console.log('You have no any information about my password');}

// ------------------ mini-practice project-20 (traffic signal related) -------------------------- 
        // var traffic_light = prompt('Enter color of traffic light signal(green,red,yellow or any other)')
        // var  stop = 'red';
        // var  start_vehicel = 'yellow';
        // var  drive    = 'green';
        // if (traffic_light === stop){console.log('Stop Do not cross road');}
        // else if (traffic_light === start_vehicel) {console.log('Start your vehicle and keep you feet on break');}
        // else if( traffic_light === drive) {console.log('drive and cross road');}
        // else{console.log('i think yor are pakistani,but keep in mind, be ready for challan, police sargant will receive you!');}

// -------------- mini-practice-project for logic building-21 (java script daily practice)-------------
        // var practice_hours = prompt('Enter your javascript daily practice hours like(1,2,7 etc)');
        // if (practice_hours >= 12){console.log('Congratulation, InshaaAllah you will become javascript expert,be consistence');}
        // else if (practice_hours >= 6) {console.log('You also get success but i think you are spending less time on javascript practicing');}
        // else if (practice_hours >= 2) {console.log('Your success chances are 40%');}
        // else {console.log('I think you are wasting your time');}
        // -------------- mini-practice-project for logic building-22 (suggestion of vehicle for travelling)----------------------
        // var numberOfPeople = prompt('Enter number of people those are going to Lahore like(1,10,40)');
        // if (numberOfPeople <= 4) {console.log('You should go by car');}
        // else if (numberOfPeople <= 12) {console.log('You should go by Hiace');}
        // else {console.log('You should go by Bus');}

        // -------------- mini-practice-project for logic building-22 (calculator)------------- 
        //  var number1 = +prompt('Enter first number');
        //  var number2 = +prompt('Enter second number');
        //  var operator = prompt('Enter an operator like(*,/,- or +)');
        //  if (operator === '*') {var total = number1 + number2;
        //         console.log(total);
        //  }
        //   else if (operator === '/') { var total = number1 / number2;
        //         console.log(total);
        //  }
        //   else if (operator === '+') { var total = number1 + number2;
        //         console.log(total);
        //  }
        //  else if (operator === '-') {var total = number1 - number2;
        //         console.log(total);

        //  }
        //  else{console.log('choose an appropriate oprator');}
        // -------------- mini-practice-project for logic building-23 (Voting Eligibility Checker)------------- 
                                                // var age = prompt('Enter your age');
                                                // if (age >= 18) {console.log('You are eligible for voting');}
                                                // else{console.log('Your age is less than requiring age for voting, you are not eligible for voting');}

                                                // -------------- mini-practice-project for logic building-21 (java script daily practice)-------------
                                                