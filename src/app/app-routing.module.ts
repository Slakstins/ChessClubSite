import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourComponent } from './nav/tour/tour.component';
import { AboutComponent } from './nav/about/about.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './nav/contact/contact.component';
import { AdminComponent } from './nav/tour/admin/admin.component';

const routes: Routes = [
  {path:'', redirectTo:"tour", pathMatch:"full"},
  {path: "tour", component: TourComponent},
{path:"about", component: AboutComponent},
{path:"contact", component: ContactComponent},
{path:"nav", component: NavComponent},
{path:"admin", component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
