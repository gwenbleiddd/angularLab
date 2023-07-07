import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { TitleComponent } from './title/title.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  }
  ,
  {
    path:'reviews',
    component:ReviewsComponent
  }
  ,
  {
    path:'title',
    component:TitleComponent
  }
  ,
  {
    path:'title/:id',
    component:TitleComponent
  }
  ,
  {
    path:'search',
    component:SearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
