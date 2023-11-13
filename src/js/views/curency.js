class CurrencyUI {
  constructor() {
    this.currency = document.getElementById("currency");
    this.dictionary = {
      USD: '$',
      EUR: '€'
    }
  }

  get currencyValue() {
    return this.currency.value;
  }

  getСurrencySymbol(){
    return this.dictionary[this.currencyValue];
  }
}

const currencyUi = new CurrencyUI();

export default currencyUi;
