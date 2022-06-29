'use strict';


// let a = [];
// a.push (1,2,3);
// a.reverse();

// let a;
// console.log(a);

// const obj = {
//     name:'Alex'
// }
//              0  1  2  3  4
// const arr = [1, 2, 3, 4, 5]


// - to String
//все данные от пользователя-строки

// 1)
// console.log(typeof(String(4)));
// 2)
//console.log('ww'+'err');
//console.log('http://vk.com/catalog/' + 5);
//console.log(typeof 42)


// - to Number
// 1)
//console.log(typeof(Number('5')));
// 2)
//console.log(typeof(+'5'));
// 3)
//console.log(typeof(parseInt('15px', 10)));
//

// 0, '', null, undefiend, Nan - всегда false

//1

//let switcher = null;

// if (switcher) {
//     console.log("Working..")
// }

//switcher = 1;

// if (switcher) {
//     console.log("Working..")
// }

//2

//console.log(typeof(Boolean('5')));

//3

//console.log(typeof((!!'5')));

// alert ("Hello World!");
// let answer = confirm("Are you here?");

// console.log(answer);


//let answer = +prompt("Есть ли вам 18?", "");

//console.log(typeof(answer));

// let incr = 10,
//     decr = 10;


// console.log (incr++);
// console.log(decr--);

// console.log(5%2);
// console.log("2" === 2);


// let isChecked = true,
//     isClose = true;

// console.log(isChecked || !isClose);

// if (2*4 == 7) {
// 	console.log("Верно!")
// }
// else {
// 	console.log ("Неверно")
// }

let num = 50;

if (num < 49) {
	console.log("Неверно!")
}
else if (num > 100) {
	console.log("Много")
}
else {
	console.log("Верно!")
};

(num == 50) ? console.log ("Верно!") : console.log("Неверно!");

switch (num ) {
	case num < 49:
		console.log('Неверно!');
		break;
	case num > 100:
		console.log("Много!");
		break;
	case num > 80:
		console.log('Все еще много!');
		break;
	case 50:
		console.log("Верно!");
		break;
	default:
		console.log('Что-то пошло не так!');
		break;
}		

let num = 50;
while (num < 500) {
	console.log(num);
	num++;
}

do {
	console.log(num);
	num++;
}
while (num < 55);

for (let i = 1; i < 8; i++) {
	if (i == 6) {
		break
	}
	console.log (i)
}


