fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => getCountries(data));

const getCountries = (data) => {
  data.forEach((countries) => {
    const {
      name: { common },
    } = countries;
    const selectMenu = document.querySelector("#selected-country");
    selectMenu.innerHTML += `<option>${common}</option>`;
    console.log(countries);
  });

  document
    .querySelector("#selected-country")
    .addEventListener("change", (e) => {
      data.filter((data) => {
        const {
          altSpellings,
          capital,
          currencies,
          flags: { svg },
          languages,
          maps: { googleMaps },
          name: { common },
          region,
        } = data;
        if (common == e.target.value) {
          console.log(common);
          const cardDiv = document.querySelector(".card");
          cardDiv.innerHTML = `<img src="${svg}" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title">${common} <sup>${altSpellings[0]}</sup></h5>
          <p class="card-text">${region}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">${capital}</li>
          <li class="list-group-item">${Object.values(currencies).map(
            (item) => Object.values(item) + " "
          )}</li>
          <li class="list-group-item">${Object.values(languages)}</li>
        </ul>
        <a href="${googleMaps}" class="btn btn-primary w-25 mx-auto m-3" target = '_blank'>Map</a>
        `;
        }
      });
    });
};
