// 1 Создаем объект автомобиля
let car = {};

// Функция для ввода информации об автомобиле через prompt
function inputCarInfo() {
    car.производитель = prompt("Введите производителя автомобиля:");
    car.модель = prompt("Введите модель автомобиля:");
    car["год выпуска"] = prompt("Введите год выпуска автомобиля:");
    car["средняя скорость"] = prompt("Введите среднюю скорость автомобиля:");
    alert("Информация об автомобиле введена успешно!");
}

// Функция для вывода на экран информации об автомобиле
function showCarInfo(car) {
    let info = "Производитель: " + car.производитель + "\n";
    info += "Модель: " + car.модель + "\n";
    info += "Год выпуска: " + car["год выпуска"] + "\n";
    info += "Средняя скорость: " + car["средняя скорость"] + " км/ч";
    alert(info);
}

// Функция для подсчета времени и перерывов
function calculateTimeAndBreaks() {
    let distance = prompt("Введите расстояние, которое нужно пройти:");
    let averageSpeed = car["средняя скорость"];
    let time = distance / averageSpeed;
    let breaks = Math.floor(time / 4);
    time += breaks;
    alert("Необходимое время для преодоления расстояния: " + time + " ч");
}

// Вызываем функции для ввода информации об автомобиле, вывода информации и расчета времени
inputCarInfo();
showCarInfo(car);
calculateTimeAndBreaks();



// 2 Создаем объект для представления дробей
// Запрашиваем у пользователя ввод числителя и знаменателя для двух дробей
const numerator1 = parseInt(prompt('Введите числитель первой дроби:'));
const denominator1 = parseInt(prompt('Введите знаменатель первой дроби:'));

const numerator2 = parseInt(prompt('Введите числитель второй дроби:'));
const denominator2 = parseInt(prompt('Введите знаменатель второй дроби:'));

// Создаем объекты для представления дробей
const fraction1 = {
  numerator: numerator1,
  denominator: denominator1
};

const fraction2 = {
  numerator: numerator2,
  denominator: denominator2
};

// Функция сложения двух дробей
function addFractions(fraction1, fraction2) {
  const result = {
    numerator: fraction1.numerator * fraction2.denominator + fraction2.numerator * fraction1.denominator,
    denominator: fraction1.denominator * fraction2.denominator
  };
  return result;
}

// Функция вычитания двух дробей
function subtractFractions(fraction1, fraction2) {
  const result = {
    numerator: fraction1.numerator * fraction2.denominator - fraction2.numerator * fraction1.denominator,
    denominator: fraction1.denominator * fraction2.denominator
  };
  return result;
}

// Функция умножения двух дробей
function multiplyFractions(fraction1, fraction2) {
  const result = {
    numerator: fraction1.numerator * fraction2.numerator,
    denominator: fraction1.denominator * fraction2.denominator
  };
  return result;
}

// Функция деления двух дробей
function divideFractions(fraction1, fraction2) {
  const result = {
    numerator: fraction1.numerator * fraction2.denominator,
    denominator: fraction1.denominator * fraction2.numerator
  };
  return result;
}

// Функция сокращения дроби
function reduceFraction(fraction) {
  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const divisor = gcd(fraction.numerator, fraction.denominator);
  fraction.numerator /= divisor;
  fraction.denominator /= divisor;
  return fraction;
}

// Пример использования
const sum = addFractions(fraction1, fraction2);
alert(`Сумма дробей: ${sum.numerator}/${sum.denominator}`);

const difference = subtractFractions(fraction1, fraction2);
alert(`Разность дробей: ${difference.numerator}/${difference.denominator}`);

const product = multiplyFractions(fraction1, fraction2);
alert(`Произведение дробей: ${product.numerator}/${product.denominator}`);

const quotient = divideFractions(fraction1, fraction2);
alert(`Частное дробей: ${quotient.numerator}/${quotient.denominator}`);

const reducedFraction1 = reduceFraction(fraction1);
alert(`Сокращенная первая дробь: ${reducedFraction1.numerator}/${reducedFraction1.denominator}`);

const reducedFraction2 = reduceFraction(fraction2);
alert(`Сокращенная вторая дробь: ${reducedFraction2.numerator}/${reducedFraction2.denominator}`);



// 3 Создаем объект, описывающий время
// Запрос времени у пользователя
let hours = parseInt(prompt("Введите часы:"));
let minutes = parseInt(prompt("Введите минуты:"));
let seconds = parseInt(prompt("Введите секунды:"));

// Создаем объект, описывающий время
let time = {
    hours: hours,
    minutes: minutes,
    seconds: seconds
};

// Функция вывода времени на экран
function displayTime() {
    alert(`${time.hours}:${time.minutes}:${time.seconds}`);
}

// Функция изменения времени на переданное количество секунд
function addSeconds(seconds) {
    time.seconds += seconds;
    time.minutes += Math.floor(time.seconds / 60);
    time.seconds %= 60;
    time.hours += Math.floor(time.minutes / 60);
    time.minutes %= 60;
    time.hours %= 24;
}

// Функция изменения времени на переданное количество минут
function addMinutes(minutes) {
    time.minutes += minutes;
    time.hours += Math.floor(time.minutes / 60);
    time.minutes %= 60;
    time.hours %= 24;
}

// Функция изменения времени на переданное количество часов
function addHours(hours) {
    time.hours += hours;
    time.hours %= 24;
}

// Пример использования функций
displayTime();

let secondsToAdd = parseInt(prompt("Введите количество секунд для добавления:"));
addSeconds(secondsToAdd);
displayTime();

let minutesToAdd = parseInt(prompt("Введите количество минут для добавления:"));
addMinutes(minutesToAdd);
displayTime();

let hoursToAdd = parseInt(prompt("Введите количество часов для добавления:"));
addHours(hoursToAdd);
displayTime();