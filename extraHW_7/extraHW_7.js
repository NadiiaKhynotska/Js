//
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
const obj =
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
            street: 'Kulas Light',
            suite: 'Apt. 556',
            city: 'Gwenborough',
            zipcode: '92998-3874',
            geo: {
                lat: '-37.3159',
                lng: '81.1496'
            }
        },
        phone: '1-770-736-8031 x56442',
        website: 'hildegard.org',
        company: {
            name: 'Romaguera-Crona',
            catchPhrase: 'Multi-layered client-server neural-net',
            bs: 'harness real-time e-markets'
        }
    }

class MultiplyObj {

    constructor(id, name, username, email, addressStreet, addressSuite, addressCity, addressZipcode, geoLat, geoLng, phone, website, companyName, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.address = {
            street: addressStreet,
            suite: addressSuite,
            city: addressCity,
            zipcode: addressZipcode,
            geo: {
                lat: geoLat,
                lng: geoLng,
            }
        }

        this.phone = phone;
        this.website = website;
        this.company = {
            name: companyName,
            catchPhrase,
            bs
        }
    }
}

let obj1 = new MultiplyObj(8, 'Vasya', 'Vssilok', 'vas@gmail.com',
    'Pryportova', 23, 'Cherkasy', '45564-5654',
    '-37.3159', '81.1496', 342323445, 'someWebsite',
    'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets')

console.log(obj1);

// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :,

//   -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
class TagDescription {
    constructor(tagName, tagAction, ...atrrs) {
        this.tagName = tagName;
        this.tagAction = tagAction;
        this.atrrs = atrrs;
    }
}


// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту

class Atrributes {
    constructor(atrributName, atrributeAction) {
        this.atrributName = atrributName,
            this.atrributeAction = atrributeAction

    }
}

// -a
const descriptionA = new TagDescription('<a>', 'Створює посилання',
    new Atrributes('href', 'Задає адресу документа, на який слід перейти.'),
    new Atrributes('href lang', 'Ідентифікує мову тексту за посиланням.'),
    new Atrributes('rel', 'Відношення між документом за посиланням та поточним документам.'))
console.log(descriptionA)

// -div
class Tag {

    constructor(tageName, tageAction, atrributes) {
        this.tageName = tageName;
        this.tageAction = tageAction;
        this.atrributes = atrributes;
    }
}

const divDescription = new Tag('<div>', 'Тег використовується, щоб групувати блоки інформації та форматувати її за допомогою CSS', [
    {titleOfAtrr: 'accesskey', actionOfAtrr: 'Дозволяє активувати або сфокусуватись на елементі за допомогою заданого сполучення клавіш'},
        {titleOfAtrr: 'class', actionOfAtrr: 'Визначає один або кілька класів, щоб зв’язати елемент з таблицею стилів (CSS)'}
])
console.log(divDescription);

// -h1
const h1Discription = new Tag('<h1>', ' визначає найбільш важливі заголовки', [
    {titleOfAtrr: 'translate', actionOfAtrr: 'Повідомляє браузеру переводити вказаний текст в елементі чи ні'},
    {titleOfAtrr: 'draggable', actionOfAtrr: 'Визначає чи можна перетягувати елемент.'}
]);
console.log(h1Discription);
// -span
let spanDiscription = new Tag('<span>', 'Тег являє собою універсальний порожній контейнер', [
    {titleOfAtrr: 'translate', actionOfAtrr: 'Повідомляє браузеру переводити вказаний текст в елементі чи ні'},
    {titleOfAtrr: 'draggable', actionOfAtrr: 'Визначає чи можна перетягувати елемент'},
    {titleOfAtrr: 'hidden', actionOfAtrr: 'Приховує вміст елемента від перегляду'}
]);
console.log(spanDiscription);
// -input
let inputDescription = new Tag('<input>', 'призначений для створення текстових полів, різних кнопок, перемикачів і прапорців', [
    {titleOfAtrr: 'style', actionOfAtrr: 'Задає вбудований (inline) CSS стиль для елемента'}
]);
console.log(inputDescription);

// -form
let formDescription = new Tag('<form>', 'використовується для створення HTML форми на сторінці', [
    {titleOfAtrr: 'method', actionOfAtrr: 'HTTP-метод відправки даних.'}
]);
console.log(formDescription);

// -option
let optionDescription = new Tag('<option>', 'призначений для створення пункту списку для тега select чи datalist', [
    {titleOfAtrr: 'label', actionOfAtrr:'Вказує короткий опис для пункту списку'},
    {titleOfAtrr: 'value', actionOfAtrr: 'Задає значення елементу `select`, яке буде обробляти скрипт.'}
]);
console.log(optionDescription);

// -select
let selectDiscription = new Tag('<select>', 'дозволяє створити елемент інтерфейсу у вигляді списку, що розкривається, а також список з одним або множинним вибором',[
    {titleOfAtrr: 'name', actionOfAtrr: 'Імʼя випадаючого списка'}
]);
console.log(selectDiscription);

// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }