/* alert('hello')
num = prompt ('Введите число')
alert("Квадрат вашего числа: " + num*num) */

alert('hello')

city = prompt ('В каком вы городе?')
year = prompt ('Год образования вашего города?')
count = prompt ('Какое количество населения в вашем городе?')
const ny = 2023

old = ny-Number(year)
console.log(old)
alert("Городу " + city + " исполнилось "+ old +" лет с момента его образования. Население - "+ count +" человек")