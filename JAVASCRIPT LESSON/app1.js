// let scrore =51;
// let score =51
// let grade=score>=50
// if (grade){
// console.log("tebrikler ${grade} ile gectiniz");

// if (grade){

// console.log("tebrikler, notunuz ${score} ile gectiniz");

// }
// else{
//     console.log("uzgunum kaldiniz");
// }
// if(score>50){
//     if(score>=50)
//     {console.log("cok basarilisiniz");}
// else {

// console.log("${score} ile gectiniz");

// }

// }else{
//     console.log("kaldiniz");
// }
// var score = 49;

// score>=50?console.log("tebrikler "):console.log("uzgunum kaldiniz");

// if(score>=40){
// if(score>=45){
//     console.log("cok basarilisiniz");
// }
// else{
//     console.log("dusuk puan");
// }

// }
// var fruits = prompt("enter your favorite fruit");
// var text;
// var fruits="banana";
// console.log(fruits.toLowerCase());

// switch (fruits.toLowerCase) {
//   case "banana":
//     text = "banana is good";
//     break;

//   case "orange":
//     text = "orange is good";
//     break;
//   case "apple":
//     text = "apple is good";
//     break;
//   default:
//     text = "this is beter for you";
//     break;
// }
// console.log(text);
  
var day = prompt("enter a day");


switch (day.toLowerCase) {
    case "monday":
    case "wednesday":
    case "thursday":
        console.log(`in class`);
        break;
    case "tuesday":
    case "friday":
        console.log(`team work`);
        break;
    case "sunday":
         console.log("tatil");
        break;
    default:
        break;
}
console.log(day);

// var year = 2152;
// var month = 2;
// var dayCount;
// switch (month) {
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         dayCount = 31;
//         break;
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         dayCount = 30;
//         break;
//     case 2:
//         if (((year % 4 == 0) && !(year % 100 == 0))
//             || (year % 400 == 0))
//             dayCount = 29;
//         else
//             dayCount = 28;
//         break;
//     default:
//         dayCount = -1; // invalid month
// }
// console.log(dayCount); // 29