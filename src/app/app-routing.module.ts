import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourComponent } from './tour/tour.component';
import { AboutComponent } from './about/about.component';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {path:'', redirectTo:"tour", pathMatch:"full"},
  {path: "tour", component: TourComponent, data: {animation: 'isLeft'}},
{path:"about", component: AboutComponent, data: {animation: 'isLeft'}},
{path:"nav", component: NavComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
