import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', "./hamburgers.css"]
})
export class HeaderComponent {
  imageWidth = 100;
  constructor(private modalService: NgbModal, private location: Location) {
  }
  public open(modal: any): void {
    this.modalService.open(modal);
  }

  burgerClickEvent() {
    const burg = document.getElementById("burger");
    if (burg?.classList.contains("is-active")){
      burg.classList.remove("is-active");
      this.location.back();
    }
    else {
      burg?.classList.add("is-active");
    }


  }
}
