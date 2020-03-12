import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public recipeDetails: any;
  searchRecipeForm: FormGroup;


  constructor( private http: HttpClient, private fb: FormBuilder) { }



  ngOnInit() {
    this.searchRecipeForm = this.fb.group({
      recipeName: ['Name,place or thing', [Validators.required]]
    });

    this.getRecipeDetails();
  }

  getRecipeDetails(): void {
    // tslint:disable-next-line:max-line-length
    this.http.get('https://kgsearch.googleapis.com/v1/entities:search?query=' + this.searchRecipeForm.controls.recipeName.value + '&key=AIzaSyAKgxm1Or1uLqMIAK5P2MXUUA5fj7I9QNY').subscribe(data => {
      this.recipeDetails = data;
      console.log(data);

    });

    // responsiveVoice.speak(this.searchRecipeForm.controls.recipeName.value );
  }
}
