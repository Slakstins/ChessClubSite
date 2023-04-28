import { Component } from '@angular/core';
import {fader} from '../../route-animations'

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
export class AboutComponent {
  title="ABOUT"

}
