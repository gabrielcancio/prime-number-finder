class PrimeSearcher {
  _logging = false;
  _startNumber = 2;
  _primeRange;

  constructor({ startNumber, primeRange, logging }) {
    this._startNumber = startNumber;
    this._primeRange = primeRange;
    this._logging = logging;
  }

  _verifyPrimeNumber(number) {
    for(let index = 2; index < number; index++) {
      if(number % index === 0) {
        return false;
      }
    }

    return true;
  }

  _performLogging(number, primeOrder) {
    if(!this._logging) return;

    console.log(`[Prime Order] ${primeOrder} - Current number ${number} - isPrime ${this._verifyPrimeNumber(number).toString()}`);
  }

  searchPrimeOrder() {
    let primesOrder = 0;
    let number = this._startNumber;

    while(primesOrder !== this._primeRange){
      if(this._verifyPrimeNumber(number)) {
        primesOrder++;
      }

      this._performLogging(number, primesOrder) 


      if(primesOrder !== this._primeRange) number++;
    }


    return number
  }
}

const prime = new PrimeSearcher({
  startNumber: 2, 
  primeRange: 10001, 
  logging: false
});
// prime._verifyPrimeNumber(104730)


console.time("\n[Script's Performance]");
console.log(prime.searchPrimeOrder());
console.timeEnd("\n[Script's Performance]");


// 10001st Prime => 104,743
