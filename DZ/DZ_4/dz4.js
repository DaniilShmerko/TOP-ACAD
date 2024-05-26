// 1
var num1 = prompt("Введите первую цифру:");
var num2 = prompt("Введите вторую цифру:");

function compareNumbers(num1, num2) {
    if (num1 < num2) {
        return -1;
    } else if (num1 > num2) {
        return 1;
    } else {
        return 0;
    }
}

var result = compareNumbers(num1, num2);
alert(result);
// 2
function factorial(n) {
    var result = 1;
    for (var i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}

var numb = prompt("Введите число для вычисления факториала:");
var result = factorial(parseInt(numb));
alert("Факториал числа " + numb + " равен: " + result);
// 3
function combineDigits(digit1, digit2, digit3) {
    var combinedNumb = "" + digit1 + digit2 + digit3;
    return parseInt(combinedNumb);
}

var firstDigit = prompt("Введите первую цифру:");
var secondDigit = prompt("Введите вторую цифру:");
var thirdDigit = prompt("Введите третью цифру:");

var result = combineDigits(firstDigit, secondDigit, thirdDigit);
alert("Число, составленное из цифр " + firstDigit + ", " + secondDigit + " и " + thirdDigit + " равно: " + result);
// 4
// var length = prompt("Введите длину:");
// var width = prompt("Введите ширину:");

function calculateArea(length, width) {
    if (width === undefined) {  
        // Если передан только один параметр, считаем площадь квадрата
        
        return alert("Площадь квадрата = " + (length * length));
    } else {
        // Иначе считаем площадь прямоугольника
        
        return alert("Площадь прямоугольника = " + (length * width));
    }
}

var length = prompt("Введите длину прямоугольника:");
var width = prompt("Введите ширину прямоугольника (если нужно):");

if (width === '') {
    var result = calculateArea(parseInt(length));
    alert("Площадь квадрата со стороной " + length + " равна: " + result);
} else {
    var result = calculateArea(parseInt(length), parseInt(width));
    alert("Площадь прямоугольника с длиной " + length + " и шириной " + width + " равна: " + result);
}
// 5
function isPerfectNumber(number) {
    var sum = 0;
    for (var i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }
    return sum === number;
}

var number = prompt("Введите число для проверки:");
var isPerfect = isPerfectNumber(parseInt(number));

if (isPerfect) {
    alert(number + " является совершенным числом.");
} else {
    alert(number + " не является совершенным числом.");
}
// 6
function isPerfectNumber(number8) {
    var sum = 0;
    for (var i = 1; i < number8; i++) {
        if (number8 % i === 0) {
            sum += i;
        }
    }
    return sum === number8;
}

function findPerfectNumbers(min, max) {
    for (var i = min; i <= max; i++) {
        if (isPerfectNumber(i)) {
            alert(i + " является совершенным числом.");
        }
    }
}

var min = prompt("Введите минимальное значение диапазона:");
var max = prompt("Введите максимальное значение диапазона:");

findPerfectNumbers(parseInt(min), parseInt(max));
// 7
let hours = parseInt(prompt("Введите часы (0-23): "));
let minutes = parseInt(prompt("Введите минуты (0-59): "));
let seconds = parseInt(prompt("Введите секунды (0-59): "));

function formatTime(hours, minutes, seconds) {
  if (hours < 0 || hours > 23 || minutes < 0 || minutes > 59 || seconds < 0 || seconds > 59) {
    throw new Error("Некорректные значения времени.");
  }
  hours = hours.toString().padStart(2, "0");
  minutes = minutes.toString().padStart(2, "0");
  seconds = seconds.toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}

try {
  alert("Точное время: " + formatTime(hours, minutes, seconds));
} catch (error) {
  alert(error.message);
}
// 8
var hour = parseInt(prompt("Введите часы"));
var minute = parseInt(prompt("Введите минуты"));
var second = parseInt(prompt("Введите секунды"));

var totalSeconds = (hours * 3600) + (minutes * 60) + seconds;

alert("Время в секундах: " + totalSeconds);
// 9
let seconds11 = parseInt(prompt("Введите секунды: "));
function secondsToTime(seconds11) {
  if (seconds11 < 0) {
    throw new Error("Количество секунд не может быть отрицательным.");
  }

  const hours = Math.floor(seconds11 / 3600);
  const minutes = Math.floor((seconds11 % 3600) / 60);
  const remainingSeconds = seconds11 % 60;
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");
  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}
alert("Исходя из секунд время: " + secondsToTime(seconds11));
// 10
// Функция для конвертации времени в секунды
function timeToSeconds(hours, minutes, seconds) {
    return (hours * 3600) + (minutes * 60) + seconds;
}

// Функция для конвертации секунд в формат "чч:мм:сс"
function secondsToTime(seconds) {
    var hours = Math.floor(seconds / 3600);
    var remainingSeconds = seconds % 3600;
    var minutes = Math.floor(remainingSeconds / 60);
    remainingSeconds = remainingSeconds % 60;
    
    return hours.toString().padStart(2, '0') + ":" + minutes.toString().padStart(2, '0') + ":" + remainingSeconds.toString().padStart(2, '0');
}

// Функция для вычисления разницы между двумя моментами времени
function calculateTimeDifference(hours1, minutes1, seconds1, hours2, minutes2, seconds2) {
    // Преобразование времени в секунды
    const totalSeconds1 = timeToSeconds(hours1, minutes1, seconds1);
    const totalSeconds2 = timeToSeconds(hours2, minutes2, seconds2);
  
    // Вычисление разницы в секундах
    const differenceInSeconds = Math.abs(totalSeconds1 - totalSeconds2);
  
    // Преобразование разницы обратно в формат "чч:мм:сс"
    return secondsToTime(differenceInSeconds);
}

// Ввод данных пользователем
const hours1 = parseInt(prompt("Введите часы для первой даты:"));
const minutes1 = parseInt(prompt("Введите минуты для первой даты:"));
const seconds1 = parseInt(prompt("Введите секунды для первой даты:"));
const hours2 = parseInt(prompt("Введите часы для второй даты:"));
const minutes2 = parseInt(prompt("Введите минуты для второй даты:"));
const seconds2 = parseInt(prompt("Введите секунды для второй даты:"));

// Вычисление и вывод разницы во времени
const timeDifference = calculateTimeDifference(hours1, minutes1, seconds1, hours2, minutes2, seconds2);
alert("Разница во времени: " + timeDifference);