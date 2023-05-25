// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

const usersArr = [];
usersArr[0] = new User(3, 'vasy', 'illin', 'some@email.com', 2343);
usersArr[1] = new User(8, 'olya ', 'mur', 'some@email.com', 7689);
usersArr[2] = new User(4, 'kola', 'vogon', 'ghsjn@gmail.com', 8943);
usersArr[3] = new User(9, 'nikita', ' zhuk', ' ojono@i.ua', 3947);
usersArr[4] = new User(45, 'petro', 'menyk', 'ieuhgwiuw@eijnei.ua', 6743);
usersArr[5] = new User(23, 'masha', 'kovalenko', ' eiwhgwingw@i.ua', 8897);
usersArr[6] = new User(90, 'ira', 'voloshuna', 'oioioi@io.oi', 9087);
usersArr[7] = new User(65, 'katya', 'demchyk', 'sifn@gmail.com', 7890);
usersArr[8] = new User(12, 'misha', 'orel', 'uioui@ioio.oioi', 4567);
usersArr[9] = new User(2, 'dima', 'nesterchuk', 'tytyt@yuyu.com', 4567);
console.log(usersArr);
//
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filteredUsers = usersArr.filter(user => user.id % 2 === 0)
console.log(filteredUsers);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sortedUsers = usersArr.sort((a, b) => a.id - b.id);
console.log(sortedUsers);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client extends User {
    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone);
        this.order = order;
    }
}

// створити пустий масив, наповнити його 10 об'єктами Client
const clientsArr = [];
clientsArr[0] = new Client(9, 'kola', 'vogon', 'oijj@gnhn.kdjf', 8978, ['good1', 'good2']);
clientsArr[1] = new Client(7, 'olya', 'vasylenko', 'gmail@gmail.com', 5645, ['good1', 'good2', 'good3']);
clientsArr[2] = new Client(3, 'petya', 'prutyla', 'rgr@iuiu.io', 9056, ['good1']);
clientsArr[3] = new Client(2, 'max', 'petrov', 'some@email.ua', 7865, ['good1', 'good2', 'good3', 'good4']);
clientsArr[4] = new Client(1, 'vika', 'korol', 'oioio@oio.i', 3454, ['good1', 'good2']);
clientsArr[5] = new Client(34, 'lev', 'kvitka', 'trtr@tr.tr', 3478, ['good1', 'good5', 'good9']);
clientsArr[6] = new Client(45, 'roma', 'petrov', 'bjbjbj@jh.ki', 7890, ['good9', 'good3', 'god1', 'good7']);
clientsArr[7] = new Client(32, 'ira', 'voloshuna', 'wer@tr.yt', 2458, ['good8', 'good4', 'good1', 'good7', 'good23', 'good6']);
clientsArr[8] = new Client(12, 'tanya', 'mur', 'poji@pin.com', 2378, ['good89']);
clientsArr[9] = new Client(17, 'muroslava', 'ivanova', 'ghjo@im.com', 7843, ['good78', 'good34', 'good4', 'good3', 'good6']);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortedClients = clientsArr.sort((a, b) => a.order.length - b.order.length);
console.log(sortedClients);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// model, manufacturer, year of manufacture,
// maximum speed, engine volume
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car(model, manufactured, yearOfManufactured, maxSpeed, engineVolume) {
    this.model = model;
    this.manufactured = manufactured;
    this.yearOfManufactured = yearOfManufactured;
    this.maxSpeed = maxSpeed;
    this.engineVolume = engineVolume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км на годину`)
    };
    this.info = function () {
        console.log(`
        model - ${this.model}
        manufactured - ${this.manufactured}
        year of manufactured - ${this.yearOfManufactured}
        maximum speed - ${this.maxSpeed}
        engine volume - ${this.engineVolume}`)
    };
    this.increaseMaxSpeed = function (newSpeed) {
        console.log(this.maxSpeed = newSpeed);
    };
    this.changeYear = function (newValue) {
        console.log(this.yearOfManufactured = newValue);
    }
    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let car = new Car('fiat', 'italy', 2007, 140, 1.4);
console.log(car);
car.info();
car.increaseMaxSpeed(220);
console.log(car);
car.changeYear(2015);
console.log(car);
car.addDriver({name: 'Dima', age: 35});
console.log(car);
car.drive();


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна
// швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car2 {
    constructor(model, manufacturer, yearOfManufacture, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfManufacture = yearOfManufacture;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }

    drive() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км на годину`)
    };

    info() {
        console.log(`
        model - ${this.model}
        manufacturer - ${this.manufacturer}
        year of manufacture - ${this.yearOfManufacture}
        maximum speed - ${this.maxSpeed}
        engine volume - ${this.engineVolume}`)
    };

    increaseMaxSpeed(newSpeed) {
        console.log(this.maxSpeed = newSpeed);
    };
    changeYear (newValue){
        console.log(this.yearOfManufacture = newValue);
    };

    addDriver (driver){
        console.log(this.driver = driver);
    }

}

// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Sinderella {

    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
sinderellasArr = [];
sinderellasArr[0] = new Sinderella('vika',32,12);
sinderellasArr[1] = new Sinderella('katya',23,25);
sinderellasArr[2] = new Sinderella('olya',17,26);
sinderellasArr[3] = new Sinderella('luda',25,32);
sinderellasArr[4] = new Sinderella('ivavka',24,27);
sinderellasArr[5] = new Sinderella('natashka',56,42);
sinderellasArr[6] = new Sinderella('vera',21,24);
sinderellasArr[7] = new Sinderella('tanya',33,29);
sinderellasArr[8] = new Sinderella('sveta',39,30);
sinderellasArr[9] = new Sinderella('masha',18,22);

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

class Prince {

    constructor(name, age, shoeSize) {
        this.name = name;
        this.age = age;
        this.shoeSize = shoeSize;
    }
}
let prince = new Prince('viktor',35, 24);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (const sinderella of sinderellasArr) {
    if(prince.shoeSize === sinderella.footSize){
        console.log(`This cinderella ${sinderella.name} is fit for a prince`)
    } else {
        console.log('The prince needs to find another shoe')
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

console.log(sinderellasArr.find(sinderella => sinderella.footSize === prince.shoeSize));