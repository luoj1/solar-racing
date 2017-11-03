client = new Paho.MQTT.Client("mqtt.solarracing.me", 8080,'/');
// set callback handlers
client.onConnectionLost = function (responseObject) {
  console.log("Connection Lost: "+responseObject.errorMessage);
}

client.onMessageArrived = function (message) {
console.log("Message Arrived: "+message.payloadString);
doucument.getElementById('out') = message.payloadString;
}

// Called when the connection is made
function onConnect(){
console.log('Connected!');
client.subscribe("telemetry/test", {qos: 2});
}
function onFailure(){
console.log('die');
}

// Connect the client, providing an onConnect callback
client.connect({
onSuccess: onConnect,
onFailure: onFailure,
username : 'sr1',
password : 'd_%6vqwQ.p#p=eE'
});
console.log('start');
