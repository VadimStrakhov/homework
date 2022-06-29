'use strict';


// в javasript существует 8 типов данных
// чтобы вывести в консоль нужно использовать console.log
//оператор "или" это ||
//оператор "и" это $$

let money = +prompt("Ваш бюджет на месяц?", '');
    console.log(money);
let time = prompt("Введите дату в формате YYYY-MM-DD", '');
    console.log(time);

let appData = {
    budget:money,
    timeData:time,
    expenses:{},
    optionalExpenses:{},
    income:[],
    savings:false
};



// for (let i = 0; i < 2; i++) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//     appData.expenses[a] = b;

//     if ( (typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null
//     && a != '' && b != '' && a.length < 50) {
//         console.log("done");
//         appData.expenses[a] = b;
//     } else {
//         console.log("bad results")
//         i--;
//     }
// }

let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
        
        

    if ( (typeof(a))==='string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        console.log("bad results")
        i--;
    }
    i++;
} 
while (i < 2);




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




















appData.moneyPerDay = appData.budget / 30;

alert ("Ежедневный бюджет: " + appData.moneyPerDay + "руб.");

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}



