// API key is git hidden in another js file as var api




// User enters city and append it to the api key




// Add event listener for button

let weatherButton = document.getElementById("weatherButton");

let input = document.getElementById("weatherText");


// adds listener for enter
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {

    let apiCity = document.getElementById("weatherText").value;
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    fetchWeather(apiCity);
  }
});


weatherButton.addEventListener("click", () =>
{
  let apiCity = document.getElementById("weatherText").value;


  fetchWeather(apiCity);
})



// Function to use API to get weather data
const fetchWeather = (apiCity) => {
  axios.get(api + apiCity)
      .then(response => {
          const info = response.data;


          let h3 = document.getElementById("h3Weather");

          h3.innerHTML = info .current.temp_c + " Celsius";


          let h4 = document.getElementById("h4Weather");
          h4.innerHTML = info .current.condition.text;

          console.log(`GET list info `, info);
         
          

          
          
         
      })
      .catch(error => console.error(error));
};




              






















