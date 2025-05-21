function showTemperature(response) {
  let currentTemperature = response.data.temperature.current;
  let temperature = Math.round(currentTemperature);
  let temperatureElement = document.querySelector("#temperature-element");
  temperatureElement.innerHTML = temperature;
  let city = document.querySelector("#city");
  city.innerHTML = response.data.city;
}

function searchCity(city) {
  let apiKey = "tf4aa9e540f4cdoa5b4833a44f190a87";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

function handleSearchForm(event) {
  event.preventDefault();
  let searchFormInput = document.querySelector("#search-form-input");

  searchCity(searchFormInput.value);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", handleSearchForm);

searchCity("Gateshead");
