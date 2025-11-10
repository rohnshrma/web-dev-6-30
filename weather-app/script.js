function fetchWeather(city) {
  var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3ed1a8944ae36bde087adc8f67d0f04a&units=metric`;
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        resolve(JSON.parse(request.responseText));
      }
      if (request.readyState === 4 && request.status !== 200) {
        reject(`Failed to fetch weather of ${city}`);
      }
    });

    request.open("GET", url);
    request.send();
  });
}

// promise usage

// fetchWeather("gurgaon")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// fetchWeather("agra")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// fetchWeather("uttarkashi")
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));

// asyn await usage

async function getData(city) {
  try {
    const data = await fetchWeather(city);
    console.log(data);
    console.log("temperature => ", data.main.temp);
    console.log("feels like => ", data.main.feels_like);
    console.log("description => ", data.weather[0].description);
    console.log("city name => ", data.name);
    const icon_url = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    console.log("icon url => ", icon_url);
  } catch (err) {
    console.log(err);
  }
}

getData("gurgaon");
getData("agra");
getData("uttarkashi");
getData("haridwar");
