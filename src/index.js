import "./css/style.scss";
import "./js/plugins";
import locations from "./js/store/locations";
import formUI from "./js/views/form";
import ticketsUI from "./js/views/tickets";
import currencyUi from "./js/views/curency";

document.addEventListener("DOMContentLoaded", () => {
  initApp();
  const form = formUI.form;

  // *Events

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    onFormSubmit();
  });

  // * Handlers
  async function initApp() {
    await locations.init();
    console.log(locations.shortCitiesList);
    formUI.setAutocompleteData(locations.shortCitiesList);
  }

  async function onFormSubmit() {
    // collect data from inputs

    const origin = locations.getCityCodeByKey(formUI.originValue);
    const destination = locations.getCityCodeByKey(formUI.destinationValue);
    const depart_date = formUI.departDateValue;
    const return_date = formUI.returnDateValue;
    const currency = currencyUi.currencyValue;

    // * CODE, CODE, DATE, DATE
    console.log(origin, destination, depart_date, return_date);

    await locations.fetchTickets({
      origin,
      destination,
      depart_date,
      return_date,
      currency,
    });
    console.log(locations.lastSearch);
    ticketsUI.renderTickets(locations.lastSearch);
  }
});
