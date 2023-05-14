import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabUnderlineService {

  constructor() { }

  underline(id: string){
    document.querySelectorAll(".tabs > span").forEach((el) =>
    el.classList.remove("underline"));
    document.getElementById(id)?.classList.add("underline");
  }
}
