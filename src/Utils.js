export function getMonthlyPayment(principal, interestRate, amortization) {
	let monthlyPeriodicInterestFactor = Math.pow(Math.pow(1 + (interestRate / 2), 2), 1 / 12) - 1;
	let monthlyPayment = (principal * monthlyPeriodicInterestFactor) / (1 - Math.pow(1 + monthlyPeriodicInterestFactor, -12 * amortization));
	return monthlyPayment.toFixed(2);
}
