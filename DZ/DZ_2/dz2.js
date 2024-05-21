
// 1 
const userAge = prompt("Сколько вам лет?");
switch (true) {
    case (userAge >= 0 && userAge <= 12):
        alert("Вам  " + userAge + ". вы ребёнок");
        break;
    case (userAge >= 13 && userAge <= 18):
        alert("Вам  " + userAge + ". вы подросток");
        break;
    case (userAge >= 19 && userAge <= 60):
        alert("Вам  " + userAge + ". вы взрослый");
        break;
    case (userAge > 60):
        alert("Вам  " + userAge + ". вы пенсия");
        break;
    default:
        console.log("Значение не попадает в диапазоны.");
        break; }

//  2 
const Button = prompt("Нашжимете клавижу от 1 до 0");
switch (true) {
    case (Button == 1):
        alert("спецсимвол клавиши " + Button + "- !");
        break;
    case (Button == 2):
        alert("спецсимвол клавиши " + Button + "- @");
        break;
    case (Button == 3):
        alert("спецсимвол клавиши " + Button + "- #");
        break;
    case (Button == 4):
        alert("спецсимвол клавиши " + Button + "- $");
        break;
    case (Button == 5):
        alert("спецсимвол клавиши " + Button + "- %");
        break;
    case (Button == 6):
        alert("спецсимвол клавиши " + Button + "- ^");
        break;
    case (Button == 7):
        alert("спецсимвол клавиши " + Button + "- &");
        break;
    case (Button == 8):
        alert("спецсимвол клавиши " + Button + "- *");
        break;
    case (Button == 9):
        alert("спецсимвол клавиши " + Button + "- (");
        break;
    case (Button == 0):
        alert("спецсимвол клавиши " + Button + "- )");
        break;
    default:
        console.log("Значение не попадает в диапазоны.");
        break; }
//  3 
let numb = prompt("Введите трехзначное число:");
let digits = numb.split('');

if (digits[0] === digits[1] || digits[0] === digits[2] || digits[1] === digits[2]) {
  alert("В числе есть одинаковые цифры!");
} else {
  alert("В числе нет одинаковых цифр.");
}
// 4
let year = prompt("Введите год:");
if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    alert(year + " - високосный год");
} else {
    alert(year + " - не високосный год");
}
// 5
let number = prompt("Введите пятизначное число:");
if (number.length !== 5) {
    alert("Пожалуйста, введите пятизначное число.");
} else {
    if (number === number.split("").reverse().join("")) {
        alert(number + " - палиндром");
    } else {
        alert(number + " - не палиндром");
    }
}
// 6
let USD = prompt("Введите сумму USD которую хотите перевести: ");
let value = prompt("Введите валюту в которую хотите конвертировать: ");
const EUR = 0.94;
const UAN = 28.48;
const AZN = 1.7;
if (value == "EUR"){
    USD = USD * 0.94;
    alert("Итого EUR = "+ USD);
} else if (value == "UAN"){
    USD = USD * 28.48;
    alert("Итого UAN = "+ USD);
} else {
    USD = USD * 1.7;
    alert("Итого AZN = "+ USD);
}
// 7 
let check = prompt("Введите сумму покупки:");
if (200 < check < 300){
    check = check - ((check * 3)/100);
    alert("Сумма после скидки в 3%"+ check);
} else if (300<check<500){
    check = check -((check * 5)/100);
    alert("Сумма после скидки в 5%"+ check);
} else if (500< check){
    check = check - ((check * 7)/100);
    alert("Сумма после скидки в 7%"+ check);
} else{
    alert("Неверный чек");
}   
// 8 
let circumference = prompt("Введите длину окружности:");
let squarePerimeter = prompt("Введите периметр квадрата:");

let circleDiameter = circumference / Math.PI;
let squareSide = squarePerimeter / 4;

if (circleDiameter <= squareSide) {
    alert("Окружность диаметром " + circleDiameter + " поместится в квадрат со стороной " + squareSide);
} else {
    alert("Окружность диаметром " + circleDiameter + " не поместится в квадрат со стороной " + squareSide);
}
// 9
let score = 0;

let answer1 = prompt("Вопрос 1: Сколько будет 2 + 2?\nA) 3\nB) 4\nC) 5");
if (answer1.toUpperCase() === "B") {
    score += 2;
}

let answer2 = prompt("Вопрос 2: Какого цвета небо?\nA) Зеленое\nB) Красное\nC) Синее");
if (answer2.toUpperCase() === "C") {
    score += 2;
}

let answer3 = prompt("Вопрос 3: Сколько часов в сутках?\nA) 12\nB) 24\nC) 48");
if (answer3.toUpperCase() === "B") {
    score += 2;
}

alert("Вы набрали " + score + " баллов.");
// 10 
let day = parseInt(prompt("Введите день:"));
let month = parseInt(prompt("Введите месяц:"));
let Year = parseInt(prompt("Введите год:"));

let daysInMonth = new Date(Year, month, 0).getDate();
let nextDay = day + 1;
let nextMonth = month;
let nextYear = Year;

if (nextDay > daysInMonth) {
    nextDay = 1;
    nextMonth++;
    if (nextMonth > 12) {
        nextMonth = 1;
        nextYear++;
    }
}

alert("Следующая дата: " + nextDay + "." + nextMonth + "." + nextYear);