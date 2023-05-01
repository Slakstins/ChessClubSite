import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import {fader} from './route-animations'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'chess-club-app';
  constructor(private modalService: NgbModal, private contexts: ChildrenOutletContexts) {
  }
  public open(modal: any): void {
    this.modalService.open(modal);
  }

}
