// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
for(let i = 0; i < number[number.length - 1]; i++) {
    if (i === 0) {
        console.log(`${i} - это ноль`);
    } else if (i % 2 === 0) 
        {console.log(`${i}– четное число`) 
        } else {
        console.log(`${i}– нечетное число`)
        }   
    }

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

let x = Math.ceil(Math.random()*10);
let y = Math.ceil(Math.random()*10);
let a = Math.ceil(Math.random()*10);
let b = Math.ceil(Math.random()*10);
let c = Math.ceil(Math.random()*10);
const random = [x, y, a, b, c];
console.log(random);

let sum = random.map(i=>x+=i, x=0).reverse()[0]
console.log(sum);

let min = Math.min(...random);
console.log(min);

function find(random) {
    for (let i = 0; i < random.length; i++) {
        if (random[i] === 3) {
            return true;
        }
    }
    return false;
}
console.log(find(random))

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

for (let i = 1; i < 21; i++){
    let slide = ""
    for (let j = 1; j <= i; j++){
        slide += "x";
    }
    console.log(slide);
}