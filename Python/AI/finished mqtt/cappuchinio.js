// JS koden ska ta emot input från Python koden som bara publicerar meddelanden och inte tar emot

// Basically allt nedan används för att connecta till en allmän mqtt server och i båda koderna används anvnamn samt lösenord
// var opn = require('opn');

var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://broker.mqttdashboard.com',{
  username: 'Dolovon',
  password: 'yes'
});

// Vår första funktion används för att ansluta/subscribe/connect till vår topic/ämne
client.on('connect', function () {
  client.subscribe('Final/teeest');  //Konstig namn men det var för att jag höll på testa och sånt

  console.log('client has subscribed successfully'); // Vi skriver ut när vi väl anslutit
});

// Vår andra funktion används för att hantera meddelanden och detta gör den genom att ta in vårat ämne samt meddelandet som skickas med den

client.on('message', function (topic, message){
  if (message.toString() == "Brian") { // Här testar jag ba om mitt meddelande överensstämmer med det python skcika // Jag printar meddelande ifall det funkar
    // for (let i = 0; i < array.length; index++) {
    //   const element = array[index];
      
    // }
    console.log("Funkar")
    
  }

  // if (message.toString() == "go to news") {
  //   opn('https://www.bbc.com/news') // Annars printar jag bara ut ämnesmeddelandet
  // }
  
});

//BTW man måste skriva .toString() för att göra den till en string aka ett riktigt meddelande


// Extra funktion om vi själva vill publicera meddelanden från JS koden
// client.on('connect', function(){
//   setInterval(function(){client.publish('idkman','testingnigga4');},3000); 
// });