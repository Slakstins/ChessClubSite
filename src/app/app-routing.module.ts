import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TourComponent } from './nav/tour/tour.component';
import { AboutComponent } from './nav/about/about.component';
import { NavComponent } from './nav/nav.component';
import { ContactComponent } from './nav/contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { ListenComponent } from './nav/listen/listen.component';

const routes: Routes = [
  {path: "", component: TourComponent},
{path:"about", component: AboutComponent},
{path:"contact", component: ContactComponent},
{path:"nav", component: NavComponent},
{path:"admin", component: AdminComponent},
{path:"listen", component: ListenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
