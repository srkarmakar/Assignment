import { Component, inject, OnInit } from '@angular/core';
import { ProductCardComponent } from './product-card/product-card.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { ProductServiceService } from '../../services/product-service.service';
import { Product } from '../../model/product';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../header/header.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductCardComponent, CommonModule, SearchComponent, HeaderComponent],
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
    this.productService.getProducts().subscribe(result => {
      this.products = result;
      this.filteredProducts = this.products;
    })
  }

  viewProductDetails(event: any) {
    this.router.navigateByUrl('product/' + event)
  }

  searchResults(event: any) {
    if (event) {
      this.filteredProducts = this.products.filter(product => product.title.toLocaleLowerCase().includes(event.toLocaleLowerCase()))
    } else {
      this.filteredProducts = this.products;
    }
  }

  searchResultOnClick(search: string) {
    if (search) {
      this.filteredProducts = this.products.filter(product => product.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    } else {
      this.filteredProducts = this.products;
    }
  }
}
