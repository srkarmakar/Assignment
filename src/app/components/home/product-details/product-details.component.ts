import { Component, Input, OnInit } from '@angular/core';
import { ProductServiceService } from '../../../services/product-service.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Product } from '../../../model/product';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterLink],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private productService: ProductServiceService,
    public activatedRoute: ActivatedRoute
  ) { }
  products : Product[] = [];
  placeholderSrc: string = 'src/assets/placeholder.jpeg'; // URL of the placeholder image
  fallbackSrc: string = 'src/assets/fallback.png'; // URL of the fallback image

  imageSrc: string = '';
  isLoading: boolean = true;
  ngOnInit(): void {
    let productID = this.activatedRoute.snapshot.params["id"]
    this.productService.getProducts().subscribe(result =>{
      this.products = result.filter(prod => prod.id.includes(productID));
      
    })     
  }
  onImageLoad() {
    this.isLoading = false;
  }

  onImageError() {
    this.imageSrc = this.fallbackSrc;
  }
}
