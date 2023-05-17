// - Знайти та вивести довижину настипних стрінгових значень
console.log('-----------Знайти та вивести довижину настипних стрінгових значень---------')
const strArr = ['hello world', 'lorem ipsum', 'javascript is cool']
for (const string of strArr) {
    console.log(string.length)
}


// - Перевести до великого регістру наступні стрінгові значення
console.log('---------Перевести до великого регістру наступні стрінгові значення--------')
// 'hello world', 'lorem ipsum', 'javascript is cool'
for (const string of strArr) {
    console.log(string.toUpperCase())
}


// - Перевести до нижнього регістру настипні стрінгові значення
console.log('-----------Перевести до нижнього регістру настипні стрінгові значення--------')
const strArrUpper = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
for (const string of strArrUpper) {
    console.log(string.toLowerCase())
}


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
console.log('-------- Почистити str від зайвих пробілів----------')
let str = ' dirty string   ';
let cleanStr = str.replaceAll(' ', '');
console.log(cleanStr);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
console.log('----------Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів----')
let str1 = 'Ревуть воли як ясла повні';
const stringToArray = str => str.split(' ');
let arr = stringToArray(str1)
console.log(arr);


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
console.log('---------за допомоги map  перетворити всі обєкти в масиві на стрінгові--------------------');
let arrNums = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let srtArr = arrNums.map(num => num = `${num}`);
console.log(srtArr);


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або
// навпаки в залежності від значення аргументу direction.
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
console.log('---------створити функцію sortNums(direction)----------')
let nums = [11, 21, 3];
const sortNums = (num, direction) => {
    if (direction === 'ascending') {
        num.sort((a, b) => a - b)
    } else if (direction === 'descending') {
        num.sort((a, b) => b - a)
    }
    return num;
}
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

console.log('==========================');
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
console.log('-- відсортувати його за спаданням за monthDuration--')
console.log(coursesAndDurationArray.sort((a, b) => a.monthDuration - b.monthDuration));

console.log('-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців --')
console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));

console.log('-- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration} --')
let mapCourses = coursesAndDurationArray.map((value, index) => {
    return {id: index + 1, ...value}
});
console.log(mapCourses);
// =========================
console.log('описати колоду карт (від 6 до туза без джокерів)')
let cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
];
console.log('знайти піковий туз')
console.log(cards.find(value => value.cardSuit === 'spade' && value.value === 'ace'));

console.log('- всі шістки')
console.log(cards.filter(value => value.value === '6'));

console.log('- всі червоні карти')
console.log(cards.filter(value => value.color === 'red'));

console.log(' - всі буби')
console.log(cards.filter(value => value.cardSuit === 'diamond'));

console.log('- всі трефи від 9 та більше')
console.log(cards.filter(value => value.cardSuit === 'clubs' && (value.value > '9' || parseInt(value.value) >= 9)));

// =========================
console.log('-----Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об\'єкт----');
const reduceCard = cards.reduce((accumulator, card) => {
    if(card.cardSuit ==='spade'){
        accumulator.spades.push(card)

    }else if(card.cardSuit === 'diamond'){
        accumulator.diamonds.push(card)

    }else if(card.cardSuit === 'heart' ){
        accumulator.hearts.push(card)

    }else accumulator.clubs.push(card)

    return accumulator;
},{spades:[], diamonds:[], hearts:[], clubs:[]})

console.log(reduceCard);

// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

console.log('--написати пошук всіх об\'єктів, в який в modules є sass')
console.log(coursesArray.filter(value => value.modules.includes('sass')));

console.log('--написати пошук всіх об\'єктів, в який в modules є docker')
console.log(coursesArray.filter(value => value.modules.includes('docker')));