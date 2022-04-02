import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'detail',
    component: RestaurantDetailComponent,
  },
  {
    path: 'restaurants',
    component: RestaurantsListComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    redirectTo: '404',
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
