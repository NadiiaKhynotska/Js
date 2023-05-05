// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr.length);
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);
console.log(arr[5]);
console.log(arr[6]);
console.log(arr[7]);
console.log(arr[8]);
console.log(arr[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book = {
    title: 'Atomic Habits',
    pageCount: 299,
    genre: 'Self development. Motivation',
}
let book2 = {
    title: 'The Fine Art Of Small Talk',
    pageCount: 74,
    genre: 'Social communications',
}
let book3 = {
    title: 'The Book Thief',
    pageCount: 412,
    genre: 'Modern prose',
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється
// масивом. Кожен автор має поля name та age.

let book4 = {
    title: 'Deception Point',
    pageCount: 560,
    genre: 'Mystical detective',
    authors: [
        {name: 'Dan Brown', age: 59}
    ]
}
let book5 = {
    title: 'The Churchill Factor',
    pageCount: 730,
    genre: 'Political figures',
    authors: [{name: 'Boris Johnson', age: 60}
    ]
}
let book6 = {
    title: 'Три товариші',
    pageCount: 679,
    genre: 'Classical prose',
    authors: [{name: 'Еріх Марія Ремарк', age: 72}
    ]
}
// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let users = [
    {
        name: 'Ola',
        username: 'barabola',
        password: '5676'
    },
    {
        name: 'Vasya',
        username: 'cocos',
        password: '8789'
    },
    {
        name: 'Petya',
        username: 'myr4ik',
        password: '9808'
    },
    {
        name: 'Anna',
        username: 'annet',
        password: '4532'
    },
    {
        name: 'Zina',
        username: 'zinka',
        password: 'dkfjdlkf'
    },
    {
        name: 'Oleg',
        username: 'olezka',
        password: 'ghjvdd78'
    },
    {
        name: 'Volodymur',
        username: 'vovan',
        password: 'dlfkdl90'
    },
    {
        name: 'Kola',
        username: 'nikola',
        password: 'nik6756'
    },
    {
        name: 'Vyagheslab',
        username: 'slavka',
        password: 'slavs987dd'
    },
    {
        name: 'Ivan',
        username: 'vano',
        password: 'V7865'
    },
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);


// Логічні розгалуження:
//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = -3;
if (x = 0) {
    console.log('not true')
} else {
    console.log('true')
}

if (x = 0 || 1 || -3) {
    console.log('true')
} else {
    console.log('not true')
}


// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = 34;
if (time > 0 && time <= 15) {
    console.log('first quarter')
} else if (time > 15 && time <= 30) {
    console.log('second quarter')
} else if (time > 30 && time <= 45) {
    console.log('third quarter')
} else if (time > 45 && time <= 59) {
    console.log('fourth quarter')
} else {
    console.log('invalid value')
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 23;
if (day > 0 && day <= 10) {
    console.log('the first decade of the month')
} else if (day > 10 && day <= 20) {
    console.log('the second decade of the month')
} else if (day > 20 && day <= 31) {
    console.log('the third decade of the month')
} else {
    console.log('invalid value')
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається
// інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let dayNam = +prompt('What day of the week is today in order? From 1 to 7')
switch (dayNam) {
    case 1:
        document.write('<h2>Today is Monday</h2>');
        break;
    case 2:
        document.write('<h2>Today is Tuesday</h2>');
        break;
    case 3:
        document.write('<h2>Today is Wednesday</h2>');
        break;
    case 4:
        document.write('<h2>Today is Thursday</h2>');
        break;
    case 5:
        document.write('<h2>Today is Friday</h2>');
        break;
    case 6:
        document.write('<h2>Today is Saturday</h2>');
        break;
    case 7:
        document.write('<h2>Today is Sunday</h2>');
        break;
    default:
        document.write('<h2>You lost count of the days. Try again</h2>');
}


//     - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох .
//         Також потрібно врахувати коли введені рівні числа.


let a = +prompt('Enter the number');
let b = +prompt('Enter The number');

if (a === b) {
    console.log(`Numbers are equal - ${a}`)
} else if (a > b) {
    console.log(`The first number ${a} ia bigger`)
} else {
    console.log(`The second number ${b} is bigger`)
}

//
//     - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy
//         (хибноподібні, тобто приводиться до false)
//

let x1 = 453
if (!!x1 === !!0 || !!'' || !!undefined || !!null) {
    x1 = 'default';
}
console.log(x1)
// console.log(!!0);
// console.log(!!null);
// console.log(!!undefined);
// console.log(!!'');
//
// console.log(!!'0');
// console.log(!!' ');
//
//     - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити
//     кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Super')
}
if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Super')
}