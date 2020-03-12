
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { routing} from './app.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { DisplayRecipeDetailsComponent } from './display-recipe-details/display-recipe-details.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DisplayRecipeDetailsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  private static HttpModule: any;
}
