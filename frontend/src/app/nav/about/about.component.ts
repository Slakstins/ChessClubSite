import { Component, OnInit } from '@angular/core';
import {fader} from '../../route-animations'
import { TabUnderlineService } from 'src/app/tab-underline.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [ // <-- add your animations here
    fader
    // slider
    // transformer
    // stepper
  ]
})
export class AboutComponent implements OnInit {
  constructor(private undelineService: TabUnderlineService){

  }
  ngOnInit(): void {
    this.undelineService.underline("about-tab");
  }
  title="ABOUT"

}
