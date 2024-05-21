// 1
let start = parseInt(prompt('Введите начало диапазона:'));
let end = parseInt(prompt('Введите конец диапазона:'));
let sum = 0;

for (let i = start; i <= end; i++) {
    sum += i;
}
alert('Сумма всех чисел в диапазоне:', sum);
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
let number = parseInt(prompt('Введите число:'));
console.log('Делители числа ' + number + ':');

for (let i = 1; i <= number; i++) {
    if (number % i === 0) {
        console.log(i);
    }
}
// 4
let number = prompt("Введите число:");
let count = 0;

while(number > 0) {
    number = Math.floor(number / 10);
    count++;
}
alert(`Количество цифр в числе: ${count}`);