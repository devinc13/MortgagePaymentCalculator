import {getMonthlyPayment} from '../src/Utils';

it('should return the expected monthly payment value', () => {
    let principal = 500000;
    let interestRate = 0.05;
    let amortization = 25;
    let monthlyPayment = getMonthlyPayment(principal, interestRate, amortization);

    expect(monthlyPayment).toBe('2908.02');
});

it('should return the expected monthly payment value #2', () => {
    let principal = 200000;
    let interestRate = 0.05;
    let amortization = 25;
    let monthlyPayment = getMonthlyPayment(principal, interestRate, amortization);

    expect(monthlyPayment).toBe('1163.21');
});

it('should return the expected monthly payment value #3', () => {
    let principal = 500000;
    let interestRate = 0.035;
    let amortization = 25;
    let monthlyPayment = getMonthlyPayment(principal, interestRate, amortization);

    expect(monthlyPayment).toBe('2496.35');
});

it('should return the expected monthly payment value #4', () => {
    let principal = 500000;
    let interestRate = 0.05;
    let amortization = 15;
    let monthlyPayment = getMonthlyPayment(principal, interestRate, amortization);

    expect(monthlyPayment).toBe('3940.62');
});
