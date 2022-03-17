let weather;

var listItems = document.querySelectorAll("li");
var header = document.querySelector(".card-header");

async function loadWeather() {
  weather = await fetch(
    "https://weatherapi-com.p.rapidapi.com/current.json?q=33.5731104%2C-7.5898434",
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "weatherapi-com.p.rapidapi.com",
        "x-rapidapi-key": "14469e0a3dmshbdffb26631da8cap1cf0bejsn08b48a710fab",
      },
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      weather = new Weather(
        data.location,
        data.current.temp_c,
        data.current.feelslike_c,
        data.current.wind_kph
      );
      console.log(data);
      return weather;
    })
    .catch((err) => {
      console.error(err);
    });

  listItems[0].textContent = "Température °c : " + weather.temp;
  listItems[1].textContent = "Température Ressenti °c :" + weather.feelslike;
  listItems[2].textContent = "Vitesse du vent : " + weather.windV;
  header.textContent = weather.location.name;
}

loadWeather();
