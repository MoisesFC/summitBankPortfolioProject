# Summit Bank Website

### This project consists of a landing page for a ficticious bank's website. It includes 4 different pages, all written in HTML with CSS styling. Bootstrap components are also implemented.

## Main features:
* Main page contains a carousel showing different products, there is the option to log in or create an account on the navbar.
* The other 3 pages contain descriptions for the different products, Checking Account, Savings and Retirement.
* The Retirement page contains a Retirement Calculator, which is powered by a Javascript function that takes advantage of the DOM to connect to the different HTML inputs by the user. After the user has typed the different numbers, a calculation will run in the Javascript code and will return the final amount in dollars that the individual would have for retirement. The formula used is the following: 

```Javascript
    const currentSavingsReturn = Math.trunc((currentSavings) * ((1) + (rateOfReturn / 12)) ** (12 * years));
    const contrubutionsReturn = Math.trunc((monthlyContributions * ((1 + rateOfReturn / 12) ** (12 * years) - 1)) / (rateOfReturn / 12));
    const totalReturns = currentSavingsReturn + contrubutionsReturn;
```
### Screenshot of the Home Page:

![alt text](./img/HomePage.png)

## Screenshot of the CheckingPage:

![alt text](./img/CheckingPage.png)

## Screenshot of the Retirment page, showing the functionality of the Retirement Calculator:

![alt text](./img/RetirementPage.png)

