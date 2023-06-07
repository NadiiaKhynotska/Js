console.log('start');

setTimeout(() => {
    console.log('timeout')
}, 2000);

let intervalID = setInterval(() => {
    console.log('interval')
}, 1000);

let timeoutID = setTimeout(() => {
    console.log('new timeout')
}, 2000);
// із асинхронних функцій перша спрацьовує ітервал -1с, потім перший таймайт , потім знову інтервал
// потім другий таймаут і знову ітервал.
console.log('middle');

console.log('end');

clearInterval(intervalID);
clearTimeout(timeoutID);
//функції очистки таймаута та інтрвала зовсім припиняють їх роботу і не відпрацьовують у консоль в даному випадку

setInterval(() => {
    document.body.innerText = new Date().toLocaleTimeString();
}, 1000)
//таймер на сторінці браузера


setTimeout(() => {
    console.log('Hello')
    setTimeout(() => {
        console.log('World')
        setTimeout(() => {
            console.log('from Ukraine')
        }, 1000)
    }, 2000)
}, 1000)


new Promise((resolve) => {
    setTimeout(() => {
        let x = 1
        console.log(x)
        resolve(x);
    }, 1000)
})
    .then((x) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                x++;
                console.log(x);
                resolve(x);
            }, 1500)
        })
    })
    .then((value) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                value++;
                console.log(value);
                resolve(value);
            }, 1500)
        })
    })