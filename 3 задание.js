//Написать функцию, которая принимает число как аргумент и возвращает функцию, которая также принимает число как аргумент и возвращает сумму этих двух чисел. Выведите в консоль результат.

function numAndCb(num1) {
	function additionOfNumbers(num2) {
		return console.log(num1 + num2);
	}
	return additionOfNumbers(2) 
}



numAndCb(10);