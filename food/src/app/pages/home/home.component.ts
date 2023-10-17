import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { OrderDetailService } from 'src/app/services/order-detail.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  constructor(
    private service: OrderDetailService,
    private titleService: Title) {
      this.titleService.setTitle('Home');
     }
  foodData: any;

  ngOnInit(): void {
    this.foodData = this.service.foodDetails;
  }

}
