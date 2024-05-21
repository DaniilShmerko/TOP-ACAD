// 1 
const userName = prompt("Как вас зовут?");
alert("Привет, " + userName + "!");

// 2 
const yearN = 2024;
const usery = prompt("Год рождения");
const age = yearN - usery;
alert("Вам " + age +" год");

// 3 
const side1 = prompt("Сторона квадрата ");
const p = 4* side1;
alert("Периметр квадрата ="+ p);

// 4 
const radius = prompt("Радиус окружности ");
const pi = 3.14;
const S = pi * (radius ** 2);
alert("Площадь окружности "+ S);

// 5 
const distance = prompt("Расстояние между городами в км:");
const time = prompt("Время в часах, за которое вы хотите добраться:");
const speed = distance / time;
alert("Ваша скорость должна соответствовать " + speed + " км/час, чтобы добраться вовремя.");

// 6 
const EUR_RATE = 0.92;
const amountInUSD = prompt("Сумму в долларах:");
const amountInEUR = amountInUSD * EUR_RATE;
alert(amountInUSD + " долларов = " + amountInEUR.toFixed(2) + " евро");

// 7 
const flashDriveSize = prompt("Объем флешки в Гб:");
const flashDriveSizeInMb = flashDriveSize * 1024;
const fileSize = prompt("Размер файла в Мб:");
const numberOfFiles = Math.floor(flashDriveSizeInMb / fileSize);
alert("На флешку объемом " + flashDriveSize + " Гб поместится " + numberOfFiles + " файлов размером " + fileSize + " Мб.");

// 8 
const money = prompt("Сумму денег в кошельке:");
const chocolatePrice = prompt("Цену одной шоколадки:");
const numberOfChocolates = Math.floor(money / chocolatePrice);
const change = money % chocolatePrice;
alert("Вы можете купить " + numberOfChocolates + " шоколадок, и у вас останется " + change + " сдачи.");

// 9 
const number = prompt("Трехзначное число:");
const firstDigit = Math.floor(number / 100);
const secondDigit = Math.floor((number % 100) / 10);
const thirdDigit = number % 10;
const reversedNumber = thirdDigit * 100 + secondDigit * 10 + firstDigit;
alert("Число " + number + " задом наперед: " + reversedNumber);

// 10
const num = prompt("Целое число:");
const isEven = number % 2 === 0;
alert(isEven ? "Число четное" : "Число нечетное");