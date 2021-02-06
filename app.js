fetch('https://api.covid19api.com/summary')
.then(res => res.json())
.then(data => displayCountries(data.Countries))

const displayCountries = countries => {
    const countriesDiv = document.getElementById('countries')
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        const countryDiv = document.createElement('div');
        countryDiv.className ='country';

        const countryInfo = `
            <h3 class="country-name">${country.Country}</h3>
            <p class="country-code">CountryCode: ${country.CountryCode}</p>
            <button onClick="displayCountryDetails('${country.Country}')">Details</button>
        `;
        countryDiv.innerHTML = countryInfo;
        countriesDiv.appendChild(countryDiv)
    }
}

let displayCountryDetails = country => {
    let url = `https://api.covid19api.com/summary`
    fetch(url)
    .then(res => res.json())
    .then(data => renderCountryInfo(data.Countries))
}

let renderCountryInfo = country => {
    let countryDiv = document.getElementById('countryDetails');
    countryDiv.innerHTML = `
        <h3>CountryName: ${country.Country}</h3>
        <h3>TotalConfirmed: ${country.TotalConfirmed}</h3>
        <h3>TotalDeaths: ${country.TotalDeaths}</h3>
        <h3>TotalRecovered: ${country.TotalRecovered}</h3>
    `
}
