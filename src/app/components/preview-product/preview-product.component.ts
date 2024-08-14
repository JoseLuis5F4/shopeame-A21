import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-product',
  templateUrl: './preview-product.component.html',
  styleUrls: ['./preview-product.component.scss'],
})
export class PreviewProductComponent implements OnInit {
  product: any = null;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((products) => {
      if (products.length > 0) {
        this.product = this.getRandomProduct(products);
      }
    });
  }

  private getRandomProduct(products: any[]): any {
    const randomIndex = Math.floor(Math.random() * products.length);
    return products[randomIndex];
  }
}
