import { Component, OnInit } from '@angular/core';
import {fader} from '../../route-animations'
import { TabUnderlineService } from 'src/app/tab-underline.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
    animations: [ // <-- add your animations here
    fader
    // slider
    // transformer
    // stepper
  ]
})
export class ContactComponent implements OnInit {
  title = "CONTACT";
  constructor(private undelineService: TabUnderlineService){

  }
  ngOnInit(): void {
    this.undelineService.underline("contact-tab");
  }
}
