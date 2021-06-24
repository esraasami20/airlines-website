import { AirLineData } from './../Model/AirlineData.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AirlineService {

  constructor(public http:HttpClient) { }

  linkData:string ="https://www.kayak.com/h/mobileapis/directory/airlines";
  
  GetData(){

    return this.http.get<AirLineData[]>(this.linkData);

  }

}
