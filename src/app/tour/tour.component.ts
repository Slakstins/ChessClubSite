import { Component } from '@angular/core';
import { Perf } from '../performance';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent {
  performances: Perf[]= [{
    venue: "The 909",
    city: "Muncie",
    state: "IN",
    date: new Date()
  },
{
    venue: "Hoosier Dome",
    city: "Indianapolis",
    state: "IN",
    date: new Date()
}]
}
