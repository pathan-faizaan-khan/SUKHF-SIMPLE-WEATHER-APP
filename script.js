const form = document.getElementById("form");
const API_URL = "http://api.weatherstack.com/current?access_key=e948821c72f69f158a263f6e91126ff5&query=";
const speed = document.getElementById("speed")
const temp = document.getElementById("temp")
const humidity = document.getElementById("humidity")
const feels = document.getElementById("feels")



form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = document.getElementById("data");
  console.log(data.value);

  setTimeout = (()=> {
    alert("time over")
    }, 2000)
  const response = await getApiData(data.value);
  if (response) {
    temp.innerText = response.current.temperature;
    speed.innerText = response.current.wind_speed
    humidity.innerText = response.current.humidity
    feels.innerText = response.current.feelslike
  }
});


const getApiData = async (data) => {
  try {
    const res = await fetch(`${API_URL}${data}`,);

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const weatherData = await res.json();
    return weatherData;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    return null;
  }
};
