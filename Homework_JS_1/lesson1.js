// Задание 1
// Необходимо создать переменную в которой будет храниться температура в градусах Цельсия, преобразовать значение в температуру по фаренгейту. 
// Формула перевода градусов Цельсия в градусы Фаренгейта: градусы Фаренгейта = (9 / 5) * градусы Цельсия + 32
// Вывести в консоль температуру в Цельсиях и Фаренгейтах.

const temCelsius = +prompt(`Введите температуру в градусах Цельсия`);
const temFahrenheit = (9 / 5) * temCelsius + 32;
alert(`Температура по Цельсию:  ${temCelsius}, температура по Фаренгейту: ${temFahrenheit.toFixed(1)}`);




// Задание 2
// Необходимо создать переменную name, записать в эту переменную свое имя. Необходимо также создать переменную admin и присвоить этой переменной значение из переменной name. Вывести значение переменной admin в консоль.

const name = 'Natalya';
const admin = name;
console.log(admin);

