import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
private productUrl = "assets/products.json"
  constructor(private http: HttpClient) { }
  getProducts() {
    return this.http.get<Product[]>(this.productUrl);
  }
}
