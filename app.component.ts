import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'weather';
  //public arr = [];
  entryOne;
  entryTwo

  constructor (public http: HttpClient) {
    this.http.get('https://api.openweathermap.org/data/2.5/weather?q=Houston&appid=340ef7e7a7e067886b37d76496f5a76c')
    .subscribe((payload) => {
      this.entryOne = payload;
      console.log(this.entryOne);
    }, (err) => {
      console.log(err);
    })

    this.http.get('https://api.openweathermap.org/data/2.5/weather?zip=90008,us&appid=340ef7e7a7e067886b37d76496f5a76c')
    .subscribe((payload) => {
      this.entryTwo = payload;
      console.log(this.entryTwo);
    }, (err) => {
      console.log(err);
    })
  }
  //arr.push(entry);

}
