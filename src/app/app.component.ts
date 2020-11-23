import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba-Cubit';
  listUsers: Object;
  
  
  constructor(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://reqres.in/api/products/3", true);
    xhr.onload = function() {
      console.log(xhr.responseText);
    };
    xhr.send();
    this.listUsers = xhr.statusText;
    }
}