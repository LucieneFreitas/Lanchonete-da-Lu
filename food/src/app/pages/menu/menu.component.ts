import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { OrderDetailService } from 'src/app/services/order-detail.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{
  constructor(
    private service: OrderDetailService,
    private titleService: Title
    ) { this.titleService.setTitle('Menu'); }
  foodData: any;



  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }

}

