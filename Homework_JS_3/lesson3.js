// Задание 1 
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

function degree(number, deg){
    let result = 1;
        for(let i = 0; i <deg; i++)
        {
            result = result * number;
        }
        return(result);
    }
console.log(degree(2,3));
console.log(degree(3,3));


// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

let wages = +prompt("Размер заработной платы составляет", "");

if (!parseInt(wages)) {
        alert(`Вы ввели не число, попробуйте еще раз`);}
    else {
        let salary = 1;
        salary = wages * 87 / 100;
  
        console.log(`Размер заработной платы за вычетом налогов равен ${salary}`); 
            
    }
        
    
// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел

let first = +prompt("Введите первое число", "");
let second = +prompt("Введите второе число", "");
let third = +prompt("Введите третье число", "");
let max = Math.max(first, second, third);
alert(`Максимальное значение среди этих чисел - ${max}`);


// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

function sum(number1, number2){
    let result = 1;
   
    result = number1 + number2;
        
    return(result);
    }

console.log(sum(2,3));
console.log(sum(3,3));

function difference(number1, number2){
    let max = Math.max(number1, number2);
    let result = 1;
    if(max===number1) {
        result = number1 - number2;
    } else (result = number2 - number1)
        
    return(result);
    }

console.log(difference(10,3));
console.log(difference(1,3));

function multiply(number1, number2){
    let result = 1;
   
    result = number1 * number2;
        
    return(result);
    }

console.log(multiply(6,3));
console.log(multiply(5,4));

function divide(number1, number2){
    let result = 1;
   
    result = number1 / number2;
        
    return(result);
    }

console.log(divide(6,2));
console.log(divide(28,4));