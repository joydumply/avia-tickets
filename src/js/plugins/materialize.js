import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

// * Init Select

const select = document.querySelectorAll('select');
const instances = M.FormSelect.init(select);

export function getSelectInstance(elem) {
  return M.FormSelect.getInstance(elem);
}

// * Init Autocomplete
const autocomplete = document.querySelectorAll('.autocomplete');
const autocomplete_instances = M.Autocomplete.init(autocomplete, {
    data: {
      Apple: null,
      Microsoft: null,
      Google: 'https://placehold.it/250x250',
    },
  });
export function getAutocompleteInstance(elem) {
  return M.Autocomplete.getInstance(elem);
}

// * Init Datepickers

const datepicker = document.querySelectorAll('.datepicker');
const datepicker_instances = M.Datepicker.init(datepicker, {
  showClearBtn: true,
  format: 'yyyy-mm'
});

export function getDatePickerInstance(elem) {
  return M.Datepicker.getInstance(elem);
}
