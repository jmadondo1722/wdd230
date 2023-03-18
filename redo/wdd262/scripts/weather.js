const url = "https://api.openweathermap.org/geo/1.0/direct?q=Pretoria&appid=9a7926f848e29af8d4a2a41594d2953a";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      //console.log(data); // this is for testing the call
      // displayResults(data);
      let lon = data[0]["lon"];
      let lat = data[0]["lat"];
      weatherFetch(lat, lon);
    } else {
        throw Error(await response.text());
    }
  } catch (error) {
      console.log(error);
  }
}

async function weatherFetch(lat, lon){
  const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=9a7926f848e29af8d4a2a41594d2953a`;
  try {
    const response2 = await fetch(weatherUrl);
    if (response2.ok){
      const weatherData = await response2.json();
      const windTemp = weatherData.main.temp;
      document.getElementById("temperature").innerHTML = parseFloat(windTemp).toFixed(0);
      const windSpeed = weatherData.wind.speed;
      document.getElementById("windSpeed").innerHTML = parseFloat(windSpeed).toFixed(1);
      windchillCalculation(windTemp, windSpeed);
      const condition = weatherData.weather[0].description;
      document.getElementById("condition").innerHTML = condition;
      const weatherIcon = weatherData.weather[0].icon;
      document.getElementById("weatherIcon").setAttribute("src", `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`);
    }
  } catch (error) {
    console.log(error);
  }
}

async function windchillCalculation(t, v){
  let stringWindChill;
  if (v < 4.8 && t > 10){
    stringWindChill = "N/A";
    document.getElementById("windChill").innerHTML = stringWindChill;
  }
  else {
    const windChill = 35.74 + (0.6215 * t) - (35.75 * (v ** 0.16)) + ((0.4275 * t) * (v ** 0.16))
    stringWindChill = windChill.toString();
    document.getElementById("windChill").innerHTML = parseFloat(stringWindChill).toFixed(0);
  }
}

apiFetch();
