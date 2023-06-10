import { Injectable } from '@angular/core';
import tourData from '../assets/tour-dates.json';
import { Perf } from './nav/tour/perf/perf.interface';

// const tourData = require('../assets/tour-dates.json').data;


@Injectable({
  providedIn: 'root'
})
export class TourFileReaderService {

  constructor() { }
  getTourData(): Perf[] {
    var perfs: Perf[] = [];
    console.log(tourData[0]);
    // console.log(tourData.length);
    for (let i = 0; i < Object.keys(tourData).length; i++){
      let tour = tourData[i];
      var perf: Perf = {
        city: tour.city,
        state: tour.state,
        venue: tour.venue,
        date: new Date(tour.year, tour.month - 1, tour.date, tour.hour)
      }
      perfs.push(perf);
    }
    return perfs;
  }
}
