import { AirLineData } from './../../Model/AirlineData.component';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-air-line-details',
  templateUrl: './air-line-details.component.html',
  styleUrls: ['./air-line-details.component.css']
})
export class AirLineDetailsComponent implements OnInit {

  constructor(private router: ActivatedRoute) { }
  
  airlineinDetails:AirLineData|any;
  
  print(){
    window.print();
  }


  ngOnInit() {

    this.router.queryParamMap.subscribe((params: any) =>     
    this.airlineinDetails= JSON.parse(params.params.data)    
    );
  
  }
}
