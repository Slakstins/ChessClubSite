import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  n1 = "TOUR"
  n2 = "ABOUT"
  n3 = "CONTACT"
  n4 = "LISTEN"
  public collapseNav () {
    document.getElementById("burger")?.classList.remove("is-active");
  }

}
