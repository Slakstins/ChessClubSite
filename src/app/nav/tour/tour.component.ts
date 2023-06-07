import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Perf } from './perf/perf.interface';
import { PerfService } from 'src/app/perf.service';
import { Observable, Subscription } from 'rxjs';
import {fader} from '../../route-animations'
import { TabUnderlineService } from 'src/app/tab-underline.service';

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
  constructor(private service : PerfService, private undelineService: TabUnderlineService){

  }
  @Input() showDelete: boolean = false;
  subscription!: Subscription;

  allDataFetched = false;
  failedDataLoad = false;
  ngOnInit(): void {
    this.undelineService.underline("tour-tab");
    this.allDataFetched = true;
    // this.subscription = this.service.get().subscribe(
    //   (response) => {
    //     response.forEach(perf => {
    //       perf.date = new Date(perf.date);
    //     });
    //     this.performances = response;
    //     this.allDataFetched = true;
    //     console.log(this.performances);
    //   },
    //   (error) => { console.log(error);
    //   this.failedDataLoad = true}
    // );
  }
  title = "TOUR";
  performances: Perf[] = [
    {city: "Indiana", date: new Date(2023, 6 - 1, 16, 19), state: "IN", venue: "Tree House"},
    {city: "Indianapolis", date: new Date(2023, 6 - 1, 23, 19), state: "IN", venue: "Healer"},
    {city: "Indianapolis", date: new Date(2023, 7 - 1, 1, 19), state: "IN", venue: "Tree House"},
    {city: "Indianapolis", date: new Date(2023, 8 - 1, 6, 19), state: "IN", venue: "Healer"},

  ]

  ngOnDestroy(): void {
    if (this.subscription){
      this.subscription.unsubscribe();
    }
  }
}
