import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { DetailService } from "../../services/detail.service";
import "@ui5/webcomponents/dist/Table";
import { Router } from "@angular/router";
//import { ColumnConfig } from 'material-dynamic-table';

@Component({
  selector: 'app-dushboard',
  templateUrl: './dushboard.component.html',
  styleUrls: ['./dushboard.component.css']
})
export class DushboardComponent implements OnInit {

  data: Object[];

  constructor(private authService: AuthService, private detailService: DetailService, private router: Router) { }

  ngOnInit() {
    this.authService.getAppliancesList().subscribe(applianesList => {
      this.data = applianesList.data;
    },
    err => {
      console.log(err);
      return false;
    });
  }

  onOpenDescription(sId){
    let oId = {id: sId};
    this.detailService.setItem(oId);
    this.router.navigate(['/detail']);
  }

}
