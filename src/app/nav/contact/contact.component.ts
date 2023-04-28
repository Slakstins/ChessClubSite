import { Component } from '@angular/core';
import {fader} from '../../route-animations'

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
export class ContactComponent {
  title = "CONTACT";

}
