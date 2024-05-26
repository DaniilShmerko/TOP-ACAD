let start = parseInt(prompt('Введите начало диапазона:'));
let end = parseInt(prompt('Введите конец диапазона:'));
let sum = 0;

for (let i = start; i <= end; i++) {
    sum += i;
}
alert('Сумма всех чисел в диапазоне: ' + sum);
// 2
let num1 = parseInt(prompt('Введите первое число:'));
let num2 = parseInt(prompt('Введите второе число:'));

let gcd;
let i = 1;

do {
    if (num1 % i === 0 && num2 % i === 0) {
        gcd = i;
    }
    i++;
} while (i <= num1 && i <= num2);

console.log('Наибольший общий делитель:', gcd);
// 3
let number1 = parseInt(prompt('Введите число:'));
console.log('Делители числа ' + number1 + ':');

for (let i = 1; i <= number1; i++) {
    if (number1 % i === 0) {
        console.log(i);
    }
}
// 4
let num = prompt("Введите число:");
let count = 0;
while(num > 0) {
    num = Math.floor(num / 10);
    count++;
}
alert(`Количество цифр в числе: ${count}`);
// 5
let userInput;
let positives = 0;
let negatives = 0;
let zeros = 0;
let evens = 0;
let odds = 0;

for (let i = 0; i < 10; i++) {
    userInput = parseInt(prompt("Введите число:"));
    if (userInput > 0) {
        positives++;
    } else if (userInput < 0) {
        negatives++;
    } else {
        zeros++;
    }
    if (userInput % 2 === 0) {
        evens++;
    } else {
        odds++;
    }
}
alert("Положительных чисел: " + positives + "\nОтрицательных чисел: " + negatives + "\nНулей: " + zeros + "\nЧетных чисел: " + evens + "\nНечетных чисел: " + odds);
// 6
let userResponse;

do {
    let num1 = +prompt('Введите первое число:');
    let operator = prompt('Введите знак (+, -, *, /):');
    let num2 = +prompt('Введите второе число:');
    let result;

    if (operator === '+') {
        result = num1 + num2;
    }
    if (operator === '-') {
        result = num1 - num2;
    }
    if (operator === '*') {
        result = num1 * num2;
    }
    if (operator === '/') {
        result = num1 / num2;
    }

    if (result !== undefined) {
        alert(`Результат: ${result}`);
    } else {
        alert('Некорректный знак');
    }

    userResponse = confirm('Хотите решить еще один пример?');
} while (userResponse);
// 7 
let number = prompt("Введите число:");
let shift = parseInt(prompt("На сколько цифр сдвинуть число?"));
let shiftedNumber = "";

if (shift > 0) {
    shiftedNumber = number.slice(shift) + number.slice(0, shift);
} else if (shift < 0) {
    shift = Math.abs(shift);
    shiftedNumber = number.slice(-shift) + number.slice(0, -shift);
} else {
    shiftedNumber = number;
}
alert("Результат сдвига: " + shiftedNumber);
//  8
let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let index = 0;
let userResp = true;

while (userResp) {
    userResp = confirm(`${days[index]}. Хотите увидеть следующий день?`);
    index = (index + 1) % days.length;
}
// 9
for (let i = 2; i <= 9; i++) {
    console.log("Таблица умножения для " + i + ":");
    for (let j = 1; j <= 10; j++) {
        console.log(i + " * " + j + " = " + (i * j));
    }
    console.log("----------------------");
}
// 10
let min = 0;
let max = 100;
let guess;
let answer; // Переместить объявление переменной answer сюда

alert("Загадайте число от 0 до 100");

do {
    guess = Math.floor((min + max) / 2);
    answer = prompt("Ваше число > " + guess + ", < " + guess + " или == " + guess + "? (Введите >, < или =)");

    if (answer === ">") {
        min = guess + 1;
    } else if (answer === "<") {
        max = guess - 1;
    }
} while (answer !== "=");

alert("Ваше число: " + guess + ". Спасибо за игру!");