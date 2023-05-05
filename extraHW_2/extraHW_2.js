// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
// кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому
// 3 і більше елементи.
// Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.

let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
if (friends.length >= 3) {
    console.log(`This is a big array. It is included ${friends.length} elements`)
} else {
    console.log(`This is a small array. It is included ${friends.length} elements`)
}

// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//     Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.

let a = +prompt('Enter first number');
let b = +prompt('Enter second number');
let c = +prompt('Enter third number');

if (a < b && a < c) {
    document.write(`<h1> First number ${a} is a middle one</h1>`)
} else if (b < a && b < c) {
    document.write(`<h1> Second number ${b} is a middle one</h1>`)
} else if (c < a && c < b) {
    document.write(`<h1> Third number ${c} is a middle one</h1>`)
} else if (a === b && b === c) {
    document.write(`<h1> The numbers are equal - ${a} </h1>`)
} else if (a === b && a < c) {
    document.write(`<h1> First twoo numbers ${a} are equal</h1>`)
} else if (a === c && a < b) {
    document.write(`<h1> First and third numbers ${a} are equal</h1>`)
} else if (c === b && c < a) {
    document.write(`<h1> Second and third numbers ${b} are equal</h1>`)
}

// - Перепишіть конструкцію if з використанням умовного оператора '?':
let result
(a + b < 4) ? result = 'Not enough' : result = 'To much';
document.write(`<h1>${result} </h1>`)
// if (a + b < 4) {
//     result = 'Мало';
// } else {
//     result = 'Багато';
// }

// - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
//
let number = a + b + c;
(number <= 100 && number !== 0 && number > 0) ? console.log(`${number} is positive`) :
    (number <= -100 && number !== 0) ? console.log(`${number} is negative`) :
        (number === 0) ? console.log(`${number} is equal to 0`) : console.log(`${number} is out of range`)

// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
//     Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)

let test = b + c;
if (!test) {
    console.log('Not true')
} else {
    console.log('True')
}

(!test) ? console.log('Not true') : console.log('True');


//
// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let lang = prompt('Яка «офіційна» назва JavaScript?')
if (lang === 'ECMAScript') {
    alert('Правильно!')
}else {
    alert( 'Не знаєте? ECMAScript!')
}

//     - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
//     Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.

let flatNum = +prompt('Enter number of your apartment');
if (flatNum>=1 && flatNum<=20){
    alert('You are from the first entrance')
}else if( flatNum>=21 && flatNum<=48){
    alert('You are from the second entrance')
}else if( flatNum>=49 && flatNum<=90){
    alert('You are from the third entrance')
}else {
    alert('You ar not from aur house')
}

// - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
let number2 = b-a;
(number2 ===10)? console.log("Correct"):console.log('Not correct');

// - Задача-гра "чи ми йдемо сьогодні в OKTEN на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН

let temperature = +prompt('What is the temperature today?')
if ( temperature >= 10 && temperature<= 22){
    document.write(`<h2>Сьогодні йдемо ВЧИТИСЯ!!!!!</h2>`)
}else {
    document.write(`<h2>Сидимо дома і вчимося онлайн</h2>`)
}
// - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
//     числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
 let input = +prompt('Enter number from 1 to 5')
switch (input){
    case 1:
        document.write(`<h1>Ви виграли автомобіль!</h1>`)
        break;
    case 2:
        document.write(`<h1>Ви виграли телефон!</h1>`)
        break;
    case 3:
        document.write(`<h1>Ви виграли авторучку!</h1>`)
        break;
    case 4:
        document.write(`<h1>Ви виграли мотоцикла!</h1>`)
        break;
    case 5:
        document.write(`<h1>Ви виграли велосипед!</h1>`)
        break;
    default:
        document.write(`<h1>ПРОМАХНУЛИСЬ!!! СПРОБУЙТЕ ЩЕ РАЗ!</h1>`)
}
