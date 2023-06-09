import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perf } from './nav/tour/perf/perf.interface';

@Injectable({
  providedIn: 'root'
})
export class PerfService {
  //testing

  url = "http://localhost:3000/";

  constructor(private http: HttpClient) {

  } 
  public get() {
    return this.http.get<Perf[]>(this.url + "perfs");
  }
  public post(data: Perf) {
    return this.http.post(this.url + "perf", data);
  }
  public delete(id: string) { 
    return this.http.delete(this.url + "perf/" + id); 
  } 
  public put(data: Perf) { 
    return this.http.put(this.url, data); 
  } 
}

