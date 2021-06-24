import { AirLineData } from './../../Model/AirlineData.component';
import { AirlineService } from './../../Service/airline.service';
import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-air-line-list',
  templateUrl: './air-line-list.component.html',
  styleUrls: ['./air-line-list.component.css']
})

export class AirLineListComponent implements OnInit { 
  closeResult = '';
   public airlines:AirLineData[]|undefined;
   public airlineDetails:AirLineData|any;

  constructor(private airline:AirlineService,private modalService: NgbModal,private router: Router) { }

  ngOnInit(): void {

    this.airline.GetData().subscribe(data=>{
    this.airlines=data; 
    })

  }

  
  open(content:any,code:string) {
    this.airlineDetails  = this.airlines?.find(a=>a.code==code);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }


  NavigateToDetailsComponent(item:AirLineData){

    this.router.navigate(['/airline-details'], { queryParams: { data: JSON.stringify(item) } });
  
  }


  private getDismissReason(reason: any): string {

    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }

  }

}
