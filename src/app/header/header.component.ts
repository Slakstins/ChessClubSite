import { Component, HostListener, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', "./hamburgers.css"]
})

export class HeaderComponent implements OnInit {
  imageWidth = 100;
  constructor(private modalService: NgbModal, private location: Location) {
  }
  innerWidth: any;
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;

  }
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }
  public open(modal: any): void {
    this.modalService.open(modal);
  }

  burgerClickEvent() {
    const burg = document.getElementById("burger");
    if (burg?.classList.contains("is-active")) {
      burg.classList.remove("is-active");
      this.location.back();
    }
    else {
      burg?.classList.add("is-active");
    }
  }

  underline(id: string){
    document.querySelectorAll(".tabs > span").forEach((el) =>
    el.classList.remove("underline"));
    document.getElementById(id)?.classList.add("underline");
  }
}
