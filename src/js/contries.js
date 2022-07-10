export const countryList = document.querySelector('.country-list');
export const countryInfo = document.querySelector('.country-info');

export const buildCountry = array => {
  const markupList = array
    .map(({ flags: { svg }, name: { official } }) => {
      return `<li class=list-item> <img class=icon src=${svg} alt=${official} width=60 />
    ${official}</li>`;
    })
    .join('');
  countryList.innerHTML = markupList;
};

export const buildCountryList = country => {
  const { flags, name, capital, languages, population } = country[0];
  const infoList = ` <div class=country-info__preview>
      <img
      src=${flags.svg}
      alt=${name.official}
      width=100
      
            class=flag-img>
      <p class=country-info__name>${name.official}</p>
      </li>
     </div >
      <ul class=country-info__description>
             <li class=country-info__item>
          <p class=country-info__title> Capital: <span class=country-info__text>${capital}</span></p>
        </li>
        <li class=country-info__item>
          <p class=country-info__title> Population: <span class=country-info__text>${population}</span></p>
        </li>
        <li class=country-info__item>
          <p class=country-info__title> Languages: <span class=country-info__text>${Object.values(
            languages
          )}</span></p>
        </li>
      </ul>`;
  countryInfo.innerHTML = infoList;
};

export function clearSearchResult() {
  countryInfo.innerHTML = '';
  countryList.innerHTML = '';
}