import { Component} from '@angular/core';
import { PerfService } from 'src/app/perf.service';
import { Perf } from '../perf/perf.interface';
import { MyDate } from './my-date';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent{
  constructor(private service: PerfService){}
  state: string | undefined;
  city: string | undefined;
  venue: string | undefined;
  date: MyDate | undefined;
  time: string | undefined;
  submit() {
    console.log(this.state);
    if (this.state == undefined || this.city == undefined ||
      this.venue == undefined || this.date == undefined
      || this.time == undefined){
        alert("undefined values!")
        return;
      }
    alert(this.date.month);
    var d = this.parseFullDate(this.time, this.date);
    alert(d?.toDateString());
   
    if (d == null){
      alert("need to add date")
      return;
    }

    this.service.post(
      {
        state: this.state,
        city: this.city,
        venue: this.venue,
        date: d,
      }
    ).subscribe(
      (response) => {
        if (response){
          alert("submitted successfully")
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
