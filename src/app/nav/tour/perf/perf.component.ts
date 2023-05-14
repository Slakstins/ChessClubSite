import { NONE_TYPE } from '@angular/compiler';
import { Component, Input, OnDestroy } from '@angular/core';
import { Perf } from './perf.interface';
import { PerfService } from 'src/app/perf.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-perf',
  templateUrl: './perf.component.html',
  styleUrls: ['./perf.component.css']
})
export class PerfComponent implements OnDestroy {
  constructor(private service: PerfService){}
  ngOnDestroy(): void {
    if (this.subscription){
      this.subscription.unsubscribe();
    }
  }
  @Input()
  performance!: Perf;
  show = true;
  @Input() showDelete: boolean = false;
  subscription!: Subscription;


  delete() {
    console.log("deleting!")
    if (performance != null){
      this.subscription = this.service.delete(this.performance._id).subscribe(
        (response) => {
          this.show = false;
        },
        (error) => {
          console.log(error);
        }

      )

    }

  }


}
