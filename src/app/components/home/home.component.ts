import { Component, inject, OnInit } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ProductServiceService } from '../../services/product-service.service';
import { Product } from '../../model/product';
import { Router, Routes } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(
    private productService: ProductServiceService,
  ) { }
  products: Product[] = [];
  filteredProducts: Product[] = [];
  router = inject(Router)
  ngOnInit(): void {
    this.productService.getProducts().subscribe((result) => {
      //console.log(result);
      this.products = result;
      this.filteredProducts = this.products;
    })
  }

  viewProductDetails(event: any) {
    //console.log('ViewParent', event);
    this.router.navigateByUrl('/product/' + event)
  }

  searchResults(event: any) {
    //console.log("Search Result", event);
    if (event) {
      this.filteredProducts = this.products.filter(product => product.title.toLocaleLowerCase().includes(event.toLocaleLowerCase()))
    } else {
      this.filteredProducts = this.products;
    }
  }

  searchResultOnClick(search: string) {
    //console.log('Home Click', search);
    if (search) {
      this.filteredProducts = this.products.filter(product => product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    } else {
      this.filteredProducts = this.products;
    }
  }
}
