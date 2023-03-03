import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  data: Product[] | undefined;

  getProducts(){
    this.apiService.getProducts()
    .subscribe((data) => {
      this.data = data;
      console.log(this.data);
      
    })
    
  }

  ngOnInit(): void {
    this.getProducts();
    
  }

}
