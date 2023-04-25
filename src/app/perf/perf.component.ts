import { NONE_TYPE } from '@angular/compiler';
import { Component, Input } from '@angular/core';
import { Perf } from '../performance';

@Component({
  selector: 'app-perf',
  templateUrl: './perf.component.html',
  styleUrls: ['./perf.component.css']
})
export class PerfComponent {
  @Input() performance: Perf | undefined;

}
