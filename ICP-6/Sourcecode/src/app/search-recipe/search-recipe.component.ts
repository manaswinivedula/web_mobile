import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-search-recipe',
  templateUrl: './search-recipe.component.html',
  styleUrls: ['./search-recipe.component.css']
})
export class SearchRecipeComponent implements OnInit {
  @ViewChild('recipe') recipes: ElementRef;
  @ViewChild('place') places: ElementRef;
  recipeValue: any;
  placeValue: any;
  venueList = [];
  recipeList = [];

  currentLat: any;
  currentLong: any;
  geolocationPosition: any;

  constructor(private _http: HttpClient) {
  }

  ngOnInit() {

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.geolocationPosition = position;
        this.currentLat = position.coords.latitude;
        this.currentLong = position.coords.longitude;
      });
  }

  getVenues() {

    this.recipeValue = this.recipes.nativeElement.value;
    this.placeValue = this.places.nativeElement.value;
    if (this.recipeValue !== null) {
      this._http.get('https://api.edamam.com/search?q=' + this.recipeValue +
        '&app_id=8f31513e&app_key=33557d2c69a48c6566ca801543277f15').
      subscribe(respReceipe => {
        this.recipeList = respReceipe['hits'];
      }, error => {});

    }

    if (this.placeValue != null && this.placeValue !== '') {
      this._http.get('https://api.foursquare.com/v2/venues/search?client_id=YP5TM0QGPAPQ52Q4ITIAPCLILDNRMNUXIG2OZS1ZT3ABM0LE' +
        '&client_secret=P5FX2FQGSBGBTITKSJYWQIX0CUVLKD4AXIAE3B014GYA05YV&v=20180323&near=' + this.placeValue + '&query=restaurant').
      subscribe(respRestuarant => {
        this.venueList = respRestuarant['response']['venues'];
      }, error => {});
    }
  }
}


