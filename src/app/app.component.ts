import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import {fader} from './route-animations'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [ // <-- add your animations here
    fader
    // slider
    // transformer
    // stepper
  ]
})
export class AppComponent {
  title = 'chess-club-app';
  constructor(private modalService: NgbModal, private contexts: ChildrenOutletContexts) {
  }
  public open(modal: any): void {
    this.modalService.open(modal);
  }
  prepareRoute(outlet: RouterOutlet) {
  // return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
}
}
