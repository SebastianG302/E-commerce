import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }
  
  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.url)
  }
}
