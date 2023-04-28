import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Perf } from './perf/perf.interface';
import { PerfService } from 'src/app/perf.service';
import { Observable, Subscription } from 'rxjs';
import {fader} from '../../route-animations'

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css'],
  animations: [ // <-- add your animations here
    fader
    // slider
    // transformer
    // stepper
  ]
})
export class TourComponent implements OnInit, OnDestroy{
  constructor(private service : PerfService){

  }

  @Input() showDelete: boolean = false;
  subscription!: Subscription;

  allDataFetched = false;
  ngOnInit(): void {
    this.subscription = this.service.get().subscribe(
      (response) => {
        response.forEach(perf => {
          perf.date = new Date(perf.date);
        });
        this.performances = response;
        this.allDataFetched = true;
        console.log(this.performances);
      },
      (error) => { console.log(error); }
    );
  }
  title = "TOUR";
  performances!: Perf[];

  ngOnDestroy(): void {
    if (this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
