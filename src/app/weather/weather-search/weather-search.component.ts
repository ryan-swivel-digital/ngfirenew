import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-weather-search',
  templateUrl: './weather-search.component.html',
  styleUrls: ['./weather-search.component.css']
})
export class WeatherSearchComponent implements OnInit {

  query = '';

  constructor() { }

  ngOnInit() {
  }

  search(){

    console.log("Hello world this is the search function " + this.query )
    
  }

}
