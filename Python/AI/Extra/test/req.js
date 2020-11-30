// const fetch = require("node-fetch");

// // fetch('http://api.openweathermap.org/data/2.5/weather?q=vasteras&appid=572d93171b72994ef6363b5648a60746&units=metric')
// //   .then(response => response.json())
// //   .then(data => console.log(data));


// fetch('http://api.openweathermap.org/data/2.5/weather?q=vasteras&appid=572d93171b72994ef6363b5648a60746&units=metric', {
//     method: 'post',
//     headers: {
//       "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
//     },
//     body: 'foo=bar&lorem=ipsum'
//   })
//   .then(JSON)
//   .then(function (data) {
//     console.log('Request succeeded with JSON response', data);
//   })
//   .catch(function (error) {
//     console.log('Request failed', error);
//   });

url = 'http://api.openweathermap.org/data/2.5/weather?q=vasteras&appid=572d93171b72994ef6363b5648a60746&units=metric'
function JSON_request(url){
    var response = UrlFetchApp.fetch(url);
    var json = response.getContentText();
    return JSON.parse(json);
  }

