// 1 Функция для возведения числа в степень

function power(base, exponent) {
    if (exponent === 0) {
        return 1; // Любое число в степени 0 равно 1
    } else {
        return base * power(base, exponent - 1); // Рекурсивный вызов для умножения числа само на себя exponent раз
    }
}

var base = parseInt(prompt("Введите основание:"));
var exponent = parseInt(prompt("Введите степень:"));
// Вызов функции и вывод результата
var result = power(base, exponent);
alert("Результат: " + result);

// 2 Функция для нахождения наибольшего общего делителя двух чисел

function gcd(a, b) {
    if (b === 0) {
        return a; // Если одно из чисел равно 0, то другое число и есть НОД
    } else {
        return gcd(b, a % b); // Рекурсивный вызов функции с новыми аргументами
    }
}

var num1 = parseInt(prompt("Введите первое число:"));
var num2 = parseInt(prompt("Введите второе число:"));
// Вызов функции и вывод результата
var result = gcd(num1, num2);
alert("Наибольший общий делитель: " + result);

// 3 Функция для поиска максимальной цифры в числе

function maxDigit(number) {
    if (number < 10) {
        return number; // Если число меньше 10, то оно и есть максимальная цифра
    } else {
        var lastDigit = number % 10; // Получаем последнюю цифру числа
        var restOfNumber = Math.floor(number / 10); // Получаем все цифры числа, кроме последней
        var maxInRest = maxDigit(restOfNumber); // Рекурсивный вызов для оставшегося числа

        return Math.max(lastDigit, maxInRest); // Сравниваем последнюю цифру с максимальной из оставшегося числа
    }
}

// Ввод числа пользователем
var inputNumber = parseInt(prompt("Введите число:"));

// Вызов функции и вывод результата
var result = maxDigit(inputNumber);
alert("Максимальная цифра: " + result);

// 4 Функция для определения является ли число простым

function isPrime(number, divisor = 2) {
    if (number < 2) {
        return false; // Числа меньше 2 не являются простыми
    } else if (number === 2) {
        return true; // Число 2 - простое
    } else if (number % divisor === 0) {
        return false; // Если число делится без остатка, то оно не простое
    } else if (divisor * divisor > number) {
        return true; // Если не найдено делителей до квадратного корня числа, то число простое
    } else {
        return isPrime(number, divisor + 1); // Рекурсивный вызов для проверки делителей
    }
}

// Ввод числа пользователем
var inputNumber = parseInt(prompt("Введите число:"));

// Вызов функции и вывод результата
var result = isPrime(inputNumber);
var message = result ? "Число простое" : "Число не простое";
alert(message);

// 5 Функция для вывода всех множителей числа в возрастающем порядке
function displayFactors(number, divisor = 2) {
    if (number < 2) {
        alert("Число должно быть больше или равно 2");
    } else if (number === 2) {
        alert("Множители: 2");
    } else {
        if (number % divisor === 0) {
            alert("Множитель: " + divisor);
            displayFactors(number / divisor, divisor); // Рекурсивный вызов для оставшегося числа
        } else {
            displayFactors(number, divisor + 1); // Переход к следующему делителю
        }
    }
}

var inputNumber = parseInt(prompt("Введите число:"));

// Вызов функции для вывода множителей
displayFactors(inputNumber);

// 6 Функция для вычисления числа Фибоначчи по порядковому номеру

function fibonacci(n) {
    if (n <= 1) {
        return n; // Числа Фибоначчи для 0 и 1 равны сами себе
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2); // Рекурсивный вызов для суммы двух предыдущих чисел
    }
}

var orderNumber = parseInt(prompt("Введите порядковый номер:"));
// Вызов функции и вывод числа Фибоначчи
var result = fibonacci(orderNumber);
alert("Число Фибоначчи: " + result);