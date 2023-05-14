import { Component, OnDestroy} from '@angular/core';
import { PerfService } from 'src/app/perf.service';
import { Perf } from '../nav/tour/perf/perf.interface';
import { MyDate } from './my-date';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnDestroy {
  constructor(private service: PerfService){}
  ngOnDestroy(): void {
    if (this.subscription){
      this.subscription.unsubscribe();
    }
  }
  state: string | undefined;
  city: string | undefined;
  venue: string | undefined;
  date: MyDate | undefined;
  time: string | undefined;
  subscription!: Subscription;
  submit() {
    console.log(this.state);
    if (this.state == undefined || this.city == undefined ||
      this.venue == undefined || this.date == undefined
      || this.time == undefined){
        alert("undefined values!")
        return;
      }
    var d = this.parseFullDate(this.time, this.date);
   
    if (d == null){
      alert("need to add date")
      return;
    }

    this.subscription = this.service.post(
      {
        state: this.state,
        city: this.city,
        venue: this.venue,
        date: d,
      }
    ).subscribe(
      (response) => {
        if (response){
          location.reload();
        }
      },
      (error) => { console.log(error); }
    )

  }

  parseFullDate(timeString: string, date: MyDate) {
    if (timeString == '') return null;

    var time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/i);
    if (time == null) return null;

    var hours = parseInt(time[1], 10);
    if (hours == 12 && !time[3]) {
      hours = 0;
    }
    else {
      hours += (hours < 12 && time[3]) ? 12 : 0;
    }
    var d = new Date(date.year, date.month - 1, date.day);
    d.setHours(hours);
    d.setMinutes(parseInt(time[2], 10) || 0);
    d.setSeconds(0, 0);
    return d;
  }


}
