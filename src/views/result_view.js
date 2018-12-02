const PubSub = require('../helpers/pub_sub.js');

const ResultView = function () {

}

ResultView.prototype.bindEvents = function () {
  PubSub.subscribe('PrimeChecker:Result-calculated', (event) => {
    const primeNumber = event.detail;
    this.displayResult(primeNumber);
  })
}

ResultView.prototype.displayResult = function (result) {
  let textResult = this.primeOrNoPrime(result);
  const resultElement = document.querySelector('#result');
  resultElement.textContent = `${textResult}`;
}

ResultView.prototype.primeOrNoPrime = function (result) {
  if (result === true){
    return "This number is a prime number.";
  }
  return "This number is NOT a  prime number.";
};

module.exports = ResultView;
