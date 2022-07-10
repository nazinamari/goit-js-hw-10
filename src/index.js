import './css/styles.css';

import { fetchCountries } from './js/fetchCountries';
import {
  buildCountry,
  buildCountryList,
  countryInfo,
  countryList,
  clearSearchResult,
} from './js/contries';

import debounce from 'lodash.debounce';
import Notiflix, { Notify } from 'notiflix';

Notiflix.Notify.init({
  width: '300px',
  position: 'rigth-top',
  timeout: 2000,
});

const DEBOUNCE_DELAY = 300;

const searchBox = document.querySelector('#search-box');

searchBox.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

function onSearch() {
  const searchName = searchBox.value.trim().toLowerCase();
  console.log(searchName);
  if (searchName) {
    fetchCountries(searchName)
      .then(resultSearch)
      .catch(error => {
        Notify.failure('Oops, there is no country with that name');
        clearSearchResult();
      });
  } else if (searchName === 0) {
    clearSearchResult();
  }
}

function resultSearch(country) {
  if (country.length > 10) {
    Notify.info('Too many matches found. Please enter a more specific name.');
    clearSearchResult();
    return;
  } else if (country.length === 1) {
    buildCountryList(country);
    countryList.innerHTML = '';
    return;
  } else {
    buildCountry(country);
    countryInfo.innerHTML = '';
    return;
  }
}