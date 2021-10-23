const appConstants = {
    apiKey: "<YOUR OWN API KEY>",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather",
    units: "metric",
    unknownValue: "NA",
    imageUrl: "http://openweathermap.org/img/wn/",
  };
  window.onload=function()
  {
    const appConstants = {
        apiKey: "f9bd7917919ed64e49a393d722904bad",
        baseUrl: "https://api.openweathermap.org/data/2.5/weather",
        units: "metric",
        unknownValue: "NA",
        imageUrl: "http://openweathermap.org/img/wn/",
      };
    const location="hyderabad";
    fetch(
        `${appConstants.baseUrl}?q=${location}&units=${appConstants.units}&APPID=${appConstants.apiKey}`
      )
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          throw Error("Error fetching data.");
        })
        .then((data) => {
         // alert(data);
         document.getElementById("temp_p").innerHTML=(data?.main?.temp)+"&deg;C";
         document.getElementById("img").style.backgroundImage=`url("${appConstants.imageUrl}${data?.weather?.[0]?.icon}.png")`;
         document.getElementById("temperature_info").innerText=data?.weather?.[0]?.description;//.weather?.[0]??.icon
         document.getElementById("city_state").innerText=data?.name+","+data?.sys?.country;
         document.getElementById("feels_like").innerHTML=data?.main?.feels_like+"&deg;";
         document.getElementById("humidity").innerText=data?.main?.humidity+"%";
         //temperature_info
        })
        .catch((error) => {
          console.error(error);
          alert(`Error getting information for ${location}`);
        });
  }
  function getWeatherInformation(event) {
    event.preventDefault();
    const location = document.querySelector(".change-location .input-group")[0]
      .value;
    fetch(
      `${appConstants.baseUrl}?q=${location}&units=${appConstants.units}&APPID=${appConstants.apiKey}`
    )
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        throw Error("Error fetching data.");
      })
      .then((data) => {
        updateDom(data);
      })
      .catch((error) => {
        console.error(error);
        alert(`Error getting information for ${location}`);
      });
  }
  function updateDom()
  {
    const appConstants = {
        apiKey: "f9bd7917919ed64e49a393d722904bad",
        baseUrl: "https://api.openweathermap.org/data/2.5/weather",
        units: "metric",
        unknownValue: "NA",
        imageUrl: "http://openweathermap.org/img/wn/",
      };
    const location=document.getElementById("location").value;
    fetch(
        `${appConstants.baseUrl}?q=${location}&units=${appConstants.units}&APPID=${appConstants.apiKey}`
      )
        .then((response) => {
          if (response.status === 200) {
            return response.json();
          }
          throw Error("Error fetching data.");
        })
        .then((data) => {
         // alert(data);
         document.getElementById("temp_p").innerHTML=(data?.main?.temp)+"&deg;C";
         document.getElementById("img").style.backgroundImage=`url("${appConstants.imageUrl}${data?.weather?.[0]?.icon}.png")`;
         document.getElementById("temperature_info").innerText=data?.weather?.[0]?.description;//.weather?.[0]??.icon
         document.getElementById("city_state").innerText=data?.name+","+data?.sys?.country;
         document.getElementById("feels_like").innerHTML=data?.main?.feels_like+"&deg;";
         document.getElementById("humidity").innerText=data?.main?.humidity+"%";
         //temperature_info
        })
        .catch((error) => {
          console.error(error);
          alert(`Error getting information for ${location}`);
        });
  }
//   function updateDom(data) {
//     const dateInformation = getDateInformation();
  
//     // Update day
//     document.querySelector(
//       ".weather .weather-information .weather-day"
//     ).innerHTML = dateInformation.day;
  
//     // Update date
//     document.querySelector(
//       ".weather .weather-information .weather-date"
//     ).innerHTML = `${dateInformation.date} ${dateInformation.month} ${dateInformation.year}`;
  
//     // Update location
//     document.querySelector(
//       ".weather .weather-information .weather-location .city"
//     ).innerHTML = `${data?.name || appConstants.unknownValue}, ${
//       data?.sys?.country || appConstants.unknownValue
//     }`;
  
//     // Update image
//     document
//       .querySelector(
//         ".weather .weather-information .weather-type .weather-image img"
//       )
//       .setAttribute(
//         "src",
//         `${appConstants.imageUrl}${data?.weather?.[0]?.icon}.png`
//       );
  
//     // Update temperature
//     document.querySelector(
//       ".weather .weather-information .weather-type .weather-temperature"
//     ).innerHTML = `${parseInt(data?.main?.temp || 0)}&deg;C`;
  
//     // Update description
//     document.querySelector(
//       ".weather .weather-information .weather-type .weather-description"
//     ).innerHTML = `${data?.weather?.[0]?.main || appConstants.unknownValue}`;
  
//     // Update information list
//     const informationNodesValues = document
//       .getElementById("information-list")
//       .querySelectorAll(".information-type .information-type-value");
  
//     informationNodesValues[0].innerHTML = `${
//       data?.main?.humidity || appConstants.unknownValue
//     }`;
//     informationNodesValues[1].innerHTML = `${
//       data?.wind?.speed || appConstants.unknownValue
//     }`;
//     informationNodesValues[2].innerHTML = `${
//       data?.visibility || appConstants.unknownValue
//     }`;
//     informationNodesValues[3].innerHTML = `${parseInt(
//       (data?.main?.["temp_min"] + data?.main?.["temp_max"]) / 2
//     )}&deg;C`;
//   }
  
  function getDateInformation() {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const d = new Date();
    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return {
      day,
      date,
      month,
      year,
    };
  }