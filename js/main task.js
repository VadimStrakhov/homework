'use strict';

let money, time;

function start() {
	money = +prompt("Ваш бюджет на месяц?", '');
	time = prompt("Введите дату в формате YYYY-MM-DD", '');

	while(isNaN(money) || money == "" || money == null) {
		money = +prompt("Ваш бюджет на месяц?", '');    
	}

}
start();




let appData = {
	budget:money,
	timeData:time,
	expenses:{},
	optionalExpenses:{},
	income:[],
	savings: true
};



function chooseExpenses() {
	for (let i = 0; i < 2; i++) {
		let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
			b = prompt("Во сколько обойдется?", "");
		
	
		if ( (typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null
		&& a != '' && b != '' && a.length < 50) {
			console.log("done");
			appData.expenses[a] = b;
		} else {
			i = i - 1;
		}
	}
}

chooseExpenses();

function checkSavings () {
	if (appData.savings == true) {
		let save = +prompt("Какова сумма накоплений?"),
			percent = +prompt("Под какой процент?");

		appData.monthIncome = save/100/12*percent;
		alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
	}
}

checkSavings();

function detectDayBudget () {
	appData.moneyPerDay = (appData.budget / 30).toFixed();

	alert ("Ежедневный бюджет: " + appData.moneyPerDay + "руб.");
}

detectDayBudget ();

function detectLevel () {
	if(appData.moneyPerDay < 100) {
		alert("Минимальный уровень достатка");
	} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
		alert("Средний уровень достатка");
	} else if (appData.moneyPerDay) {
		alert("Высокий уровень достатка");
	} else {
		alert("Произошла ошибка");
	}
}
detectLevel ();

function chooseOptExpenses () {
	for (let i = 0; i < 3; i++) {
		let questionOptExpenses = prompt("Статья необязательных расходов?");
	}
	appData.optionalExpenses300[i] = questionOptExpenses;
	console.log(questionOptExpenses);
}






// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
		
		

//     if ( (typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         console.log("bad results")
//         i--;
//     }
//     i++;
// } 
// while (i < 2);




// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//         appData.expenses[a] = b;
	

//     if ( (typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         console.log("bad results")
//         i--;
//     }
//     i++;
// }

// в javasript существует 8 типов данных
// чтобы вывести в консоль нужно использовать console.log
//оператор "или" это ||
//оператор "и" это $$
// в груглых скобках функции () записываются параметры этой функции или аргументы функции






















