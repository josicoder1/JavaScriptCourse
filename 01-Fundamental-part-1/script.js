'use strict';
//  js ='amazing';
//         if(js=='amazing') alert("javascript is fun!");
// console.log(40+8+23-10);
// const favorite=prompt("what's yout favorite number?");
// console.log(favorite);
// const yes = typeof favorite;
// if(yes=='string'){
//         console.log('yes String');
// }

// const day =prompt('enter the day');
// switch(day){
//         case 'Monday':
//                 console.log('to structure my files');
//                 break;
//         case 'Tuesday':
//                 console.log('to coding');
//                 break;
//         case 'Wensday':
//                 console.log('to go coding meetup');
//                 break;
//         case 'Thruesday':
//                 console.log('to testing project');
//                 break;
//         case 'Frieday':
//         case 'Saturday':
//         case 'Sunday':
//                 console.log('break');
//                 break;
//         default:
//                 console.log('not valid day!');
// }
// const age =23;
// age >= 18 ? console.log('i like to drink wine'):console.log('i like to drink water');
// console.log(`i like to drink ${age>=18 ? 'wine':'water' }`);

// const bill = Number(prompt('enter the bill'));
// const tip =bill <=300 && bill >=50 ?bill * 0.15: bill * 0.2;
// console.log(`the bill was  ${bill}, the tip ${tip}, and the total ${bill + tip}`);
// const bb=false;
// aa=true;

// Arrow function
// const calAge =birthYear => 2037 - birthYear;
// const age =calAge(1991);
// console.log(age);
const yearsUntilRetirment = birthYear => {
    const currentAge = 2018 -birthYear;
    const retirment = 65 -currentAge;
    return retirment;
}

const age2 =yearsUntilRetirment(1995);
console.log(age2);