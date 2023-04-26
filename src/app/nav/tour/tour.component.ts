import { Component, OnInit } from '@angular/core';
import { Perf } from './perf/perf.interface';
import { PerfService } from 'src/app/perf.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit{
  constructor(private service : PerfService){

  }

  allDataFetched = false;
  ngOnInit(): void {
    this.service.get().subscribe(
      (response) => {
        response.forEach(perf => {
          perf.date = new Date(perf.date);
        });
        this.performances = response;
          this.allDataFetched = true;
      },
      (error) => { console.log(error); }
    );
  }
  title = "TOUR";
  performances!: Perf[];
}
