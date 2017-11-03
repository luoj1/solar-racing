import { Component } from '@angular/core';
var mqtt = require('mqtt');
console.log('connnecting');
const client = mqtt.connect('',{port:1884,username:'',password:'',keepalive:60});

var holder = '?';

client.on('connect', () => {
console.log('work');
client.subscribe('telemetry/test');
//  client.subscribe('presence');
//  client.publish('presence','hello');
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = holder;
}
Object.setPrototypeOf(AppComponent.prototype, {title:{'x'}});
client.on('message', function (topic, message) {
  console.log(message.toString());
  holder  = message.toString();

})
