const evaluate = document.getElementById(`evaluateBtn`);

evaluate.addEventListener(`click`, evaluateRetirement);

function evaluateRetirement() {
    let currentAge = parseInt(document.getElementById("currentAgeInput").value);
    let retiremtnAge = parseInt(document.getElementById(`retirementAgeInput`).value);
    let currentSavings = parseInt(document.getElementById(`currentSavingsInput`).value);
    let monthlyContributions = parseInt(document.getElementById(`contributionsInput`).value);
    let rateOfReturn = (parseInt(document.getElementById(`rateOfReturnInput`).value)) / 100;
    let years = retiremtnAge - currentAge;
    let resultCard = document.getElementById(`resultsCard`);

    const currentSavingsReturn = Math.trunc((currentSavings) * ((1) + (rateOfReturn / 12)) ** (12 * years));
    const contrubutionsReturn = Math.trunc((monthlyContributions * ((1 + rateOfReturn / 12) ** (12 * years) - 1)) / (rateOfReturn / 12));
    const totalReturns = currentSavingsReturn + contrubutionsReturn;
    const finalWithCommas = totalReturns.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

    resultCard.classList.remove(`d-none`);
    document.getElementById(`evualuationResults`).innerHTML = `In ${years} years, your potential retirement savings could be worth <strong> $${finalWithCommas} </strong>`;

}

