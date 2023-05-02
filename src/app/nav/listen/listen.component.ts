import { Component } from '@angular/core';
import {fader} from '../../route-animations'
import { TabUnderlineService } from 'src/app/tab-underline.service';

@Component({
  selector: 'app-listen',
  templateUrl: './listen.component.html',
  styleUrls: ['./listen.component.css'],
animations: [ // <-- add your animations here
    fader // slider
    // transformer
    // stepper

]
})
export class ListenComponent {
  constructor(private undelineService: TabUnderlineService){

  }
  title = "LISTEN";
  ngOnInit(): void {
    this.undelineService.underline("listen-tab");
  }
}
