import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { FaIconComponent } from "@fortawesome/angular-fontawesome";
@Component({
  selector: 'app-weather',
  imports: [CommonModule, FaIconComponent],
  standalone: true,
  templateUrl: './weather.html',
  styleUrl: './weather.scss'
})
export class Weather  implements OnInit  {

  weatherData = signal<any | null>(null);

  constructor(private http: HttpClient) {}
today = new Date();

  ngOnInit() {
    this.fetchWeather();
  }
  fetchWeather() {
    const url = `http://api.weatherapi.com/v1/current.json?key=05a2d5aff2cd48d6ad5100153250308&q=Tehran&aqi=no
`

this.http.get(url).subscribe((data: any) => {
      this.weatherData.set({
        temp: data.current.temp_c,
      });
    });
  }

}
