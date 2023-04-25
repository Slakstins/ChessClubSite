import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', "./hamburgers.css"]
})
export class HeaderComponent {
  imageWidth = 100;
  constructor(private modalService: NgbModal) {
  }
  public open(modal: any): void {
    this.modalService.open(modal);
  }
  status: boolean = false;
  burgerClickEvent() {
    this.status = !this.status;
  }
}
