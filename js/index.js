// 9. Світлофор

let color = prompt('Enter a color');
let car = prompt('Enter the availability of car');

if (car === 'false') {
    car = false;
}

if (car === 'true') {
    car = true;
}

if (color === 'green' && car === false) {
    alert('You can go');
}
else if (color === 'green' && car === true) {
    alert('Wait until the offenders pass');
}
else if (color === 'yellow' && car === true) {
    alert('Please wait');
}
else if (color === 'yellow' && car === false) {
    alert('Still wait');
}
else if (color === 'red' && car === false) {
    alert('STOP and wait');
}
else if (color === 'red' && car === true) {
    alert('You have to wait for the green light');
}
else {
    alert('Do what ever you want');
}


// 1. якщо а = 0

let a = -3;
if (a === 0) {
    console.log(true);
}
else {
    console.log(false);
}

// 2. Чверть години

const min = 58;
if (min >= 0 && min <= 14) {
    console.log('It is the first quarter of an hour!');
}
else if (min >= 15 && min <= 29) {
    console.log('It is the second quarter of an hour!');
}
else if (min >= 30 && min <= 44) {
    console.log('It is the third quarter of an hour!');
}
else if (min >= 45 && min <= 59) {
    console.log('It is the fourth quarter of an hour!');
}
else {
    console.log('It is unknown quarter of an hour!');
}


// 4. Пори року

const month = 1;
if (month === 1, 2, 3) {
    console.log('It is Winter');
}
else if (month === 4, 5, 6) {
    console.log('It is Spring');
}
else if (month >= 7 && month <= 9) {
    console.log('It is Summer time');
}
else if (month >= 10 && month <= 12) {
    console.log('It is an Autumn');
}
else {
    console.log('Wrong input');
}

// 5. switch

const num = 3;

switch (num) {
    case (1):
        console.log('Winter');
        break;
    case (2):
        console.log('Spring');
        break;
    case (3):
        console.log('Summer');
        break;
    case (4):
        console.log('Autumn');
        break;
}

//  3. bc

const b = 3;
const c = 2;

if (b <= 1 && c >= 3) {
    console.log(b + c);
}
else {
    console.log(b - c);
}

// month

const numbers = 10;
if (numbers === 1) {
    console.log('January');
}
else if (numbers === 2) {
    console.log('February');
}
else if (numbers === 3) {
    console.log('March');
}
else if (numbers === 4) {
    console.log('April');
}
else if (numbers === 5) {
    console.log('May');
}
else if (numbers === 6) {
    console.log('June');
}
else if (numbers === 7) {
    console.log('July');
}
else if (numbers === 8) {
    console.log('August');
}
else if (numbers === 9) {
    console.log('September');
}
else if (numbers === 10) {
    console.log('October');
}
else if (numbers === 11) {
    console.log('November');
}
else if (numbers === 12) {
    console.log('December');
}


// 7. зростання

const number = [66, 3, 10, 1];
const result = number.sort();
console.log(result);
