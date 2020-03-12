import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import { DisplayRecipeDetailsComponent} from './display-recipe-details/display-recipe-details.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'display-recipe-details', component: DisplayRecipeDetailsComponent}
];

export const routing = RouterModule.forRoot(appRoutes);
