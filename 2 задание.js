//Написать функцию, которая принимает на входе любое число (но не больше 1 000), определяет, является ли оно простым, и выводит простое число или нет. Если введено больше 1 000, то выводится сообщение, что данные неверны. Обратите внимание на числа 0 и 1.
//Здесь вам пригодятся знания из предыдущего модуля — циклы и условные операторы.

function definitionNumber(number) {
	if (number > 1000 || number == 0 || number == 1) {
		return alert('Данные неверны');
	} else {
		for (let i = 2; i < number; i++) {
			if (number % i == 0) {
				return alert(`Число ${number} - Составное`);
			}
		}
	}
	return alert(`Число ${number} - Простое`);
}

definitionNumber(25);