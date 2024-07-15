import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private http: HttpClient) { }
  getProducts() {
    return this.http.get<Product[]>('http://localhost:3000/products');
    //https://gw.hellofresh.com/api/recipes/search?country=us&locale=en-US&limit=9&cuisine=italian&order=-rating use later with Bearer Token
  }

  getProductDetails(id: string) {
    return this.http.get<Product>('http://localhost:3000/products/' + id)
  }

  addNewProduct(product: Product) {
    return this.http.post<Product>('http://localhost:3000/products', product)
  }

  editProduct(product: Product) {
    return this.http.put<Product>('http://localhost:3000/products/' + product.id, product)
  }
}
