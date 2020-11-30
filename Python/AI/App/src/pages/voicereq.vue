<template>
  
</template>

<script>

// var opn = require('opn');
var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://broker.mqttdashboard.com',{username: 'Dolovon',password: 'yes'});

client.on('connect', function () {
  client.subscribe('Final/teeest');  
  console.log('client has subscribed successfully'); 
});

client.on('message', function (topic, message){
  if (message.toString() == "go to weather") { 
    //Goto weather page (Weather.vue)
    
  }
});

</script>

<style>

</style>