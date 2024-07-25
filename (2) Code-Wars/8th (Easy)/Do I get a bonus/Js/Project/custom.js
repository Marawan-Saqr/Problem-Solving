function bonusTime(salary, bonus) {

	let result = 0;

	if (bonus === true) {
		result = salary * 10;
		return "£" + result.toString();
	}
	else {
		return "£" + salary.toString();
	}

}

console.log(bonusTime(10000, true));