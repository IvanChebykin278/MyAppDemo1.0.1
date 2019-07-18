import { Component, OnInit, Input } from '@angular/core';
import { DetailService } from "../../services/detail.service";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  oId: Object;
  id: String;
  name: String;
  typ: String;
  color: String;
  energyClass: String;
  weigth: Number;
  

  constructor(private detailService: DetailService, private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if(this.detailService.getItem()) {
      this.oId = this.detailService.getItem();
      this.authService.getApplianceById(this.oId).subscribe(data => {
        this.id = data._id;
        this.name = data.name;
        this.typ = data.discription.typ;
        this.color = data.discription.color;
        this.energyClass = data.discription.energyClass;
        this.weigth = data.discription.weight;
      });
    }
  }

  goBack() {
    this.router.navigate(['/dushboard']);
  }

}
