// Задача 1. 
// Дан номер месяца (1 — январь, 2 — февраль, ...). 
// Вывести название соответствующего времени года ("зима", "весна" и т.д.). 
var season = 'сезон';
if (season = [12, 1, 2, ]) {
    console.log('Зима');
} else if (season = [3, 4, 5]) {
    console.log('Весна');
} else if (season = [6, 7, 8]) {
    console.log('Лето');
} else if (season = [9, 10, 11]) {
    console.log('Осень');
} else {
    console.log('Это не сезон');
};
season = 3;

// Задача 2 
// Даны две переменные целого типа: A и B. 
// Если их значения не равны, то присвоить каждой переменной сумму этих значений,
// а если равны, то присвоить переменным нулевые значения.

var a, b;

if (a != b) {
    console.log(a = a + b, b = a + b - b);
} else if (a == b) {
    console.log(a = 0, b = 0);
} else {
    console.log('как записать свойства объекта в else??? и можно ли?');
};

a = 2, b = 2;
a = 2, b = 3;

// Допустима ли записть console.log( a = a+b && b = a + b )?
// var sumab = ( a != b ) ? ( a = a+b, b = a+b ) : ( a = 0, b = 0 );
// a = 3, b = 2 ; 

// как записать - var a = Number 

// Задача 3
// Значения переменных X, Y, Z поменять местами так, чтобы они оказались 
// упорядоченными по возрастанию


var x, y, z;

if ((x > y) && (x > z) && (y > z)) {
    console.log(x, y, z);
} else if ((x > y) && (x > z) && (z > y)) {
    console.log(x, z, y);
} else if ((z > x) && (z > y) && (x > y)) {
    console.log(z, x, y);
} else if ((z > x) && (z > y) && (y > x)) {
    console.log(z, y, x);
} else if ((y > z) && (y > x) && (z > x)) {
    console.log(y, x, z);
} else if ((y > z) && (y > x) && (x > z)) {
    console.log(y, z, x);
} else {
    console.log('Не x, не у и не z')
};

x = 4, z = 6, y = 1;


// var x, y, z;

// if ( (z < x > y) && (y > z) ) {console.log(x,y,z);
// } else if ( (z < x > y) && (z > y) ) {console.log(x,z,y);
// } else if ( (y < z > x) && (x > y) ) {console.log(z,x,y);
// } else if ( (y < z > x) && (y > x) ) {console.log(z,y,x);
// } else if ( (x < y > z) && (z > x) ) {console.log(y,x,z);
// } else if ( (x < y > z) && (x > z) ) {console.log(y,z,x);
// } else {console.log( 'Не x, не у и не z')};

// x = 4, z = 6, y = 1;

// Задача 4 
// Дан номер некоторого года (положительное целое число). 
// Вывести число дней в этом году, учитывая, что обычный год насчитывает 365 дней, 
// а високосный — 366 дней. Високосным считается год,
// делящийся на 4, за исключением тех годов, которые делятся на 100 и не делятся на 400 
// (например, годы 300, 1300 и 1900 не являются високосными, а 1200 и 2000 — являются).

var yr = (yr > 0 && yr <= 2019);
flag = true;

if ((yr / 4) && (yr / 100) && (!flag == yr / 400)) {
    console.log('Это високосный год 366');
} else {
    console.log('Это обычный год 365 дней')
};
yr = 1200;

// Задача 5 
// Дано целое число, лежащее в диапазоне от –999 до 999. 
// Вывести строку — словесное описание данного числа вида 
// "отрицательное двузначное число", "нулевое число", "положительное однозначное число" и т.д.

var num = (num >= -999 && num <= 999);

if (num >= -999 && num <= -100) {
    console.log('отрицательное трехзначное число');
} else if (num >= -99 && num <= -10) {
    console.log('отрицательное двузначное число');
} else if (num >= -9 && num <= -1) {
    console.log('отрицательное однозначное число');
} else if (num === 0) {
    console.log('нулевое число');
} else if (num >= 1 && num <= 9) {
    console.log('положительное однозначное число');
} else if (num >= 10 && num <= 99) {
    console.log('положительное двузначное число');
} else if (num >= 100 && num <= 999) {
    console.log('положительное трехзначное числ');
} else {
    console.log('Это не num');
};
num = 300;

// Задача 6 
// Проверить истинность высказывания: "Сумма цифр данного трехзначного числа является четным числом".

// Option 1



var e;
e = Number; 
var sumEl;

sumEl = (e.charAt(0) + 'e'.charAt(1) + 'e'.charAt(2)) 
{ console.log(sumEl);
};
// sum = sum + 1;

e = 222;

if ( sumEl % 2 == 0 ) {
    console.log('Это четное число');
} else {
    console.log('Это НЕ четное число');
};

// Option 2
var e; 

if ( (e % 2) ) {
    console.log('Это не четное число');
} else {
    console.log('Это  четное число');
};
e = 222;



// Задача 7 
// Дано целое число в диапазоне 0 – 9. 
// Вывести строку — название соответствующей цифры на русском языке (0 — "ноль", 1 — "один", 2 — "два", ...).

var n;

// n=Number;
// n = (n <= 0 && n >= 9);

if (n ==  0) {console.log ('ноль');
} else if (n == 1){console.log ('один');
} else if (n == 2){console.log ('два');
} else if (n == 3){console.log ('три');
} else if (n == 4){console.log ('четыре');
} else if (n == 5){console.log ('пять');
} else if (n == 6){console.log ('шесть');
} else if (n == 7){console.log ('семь');
} else if (n == 8){console.log ('восемь');
} else if (n == 9){console.log ('девять');
} else {console.log ('Это не N');};

n = 3;




// Задача 8 
// Из трех данных чисел выбрать наибольшее.

var q,w,r;
if ((q > w) && (q > r)) {
    console.log(q);
} else if ((w > q) && (w > r)) {
    console.log(w);
} else if ((r > w) && (r > q)) {
    console.log(r);
} else {console.log('Числа равны или что-то еще')};

q = 3; w = 4; r = 5;
