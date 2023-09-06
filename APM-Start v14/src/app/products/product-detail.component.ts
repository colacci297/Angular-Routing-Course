import {Component, OnInit} from '@angular/core';

import {Product, ProductResolved} from './product';
import { ProductService } from './product.service';
import {ActivatedRoute} from "@angular/router";
import {tap} from "rxjs";


@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit{
  pageTitle = 'Product Detail';
  product: Product | null = null;
  errorMessage: string | undefined = '';

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    const resolvedData: ProductResolved = this.route.snapshot.data['product'];
    console.log(resolvedData,'resolver');
    this.errorMessage = resolvedData.error;
    if (resolvedData.product) {
      this.onProductRetrieved(resolvedData.product);
    }
    // this.product = this.route.snapshot.data['product'];

    // const id = this.route.snapshot.paramMap.get('id');
    // if (id) {
    //   this.getProduct(+id);
    // }

    this.route.data.pipe(
      tap(data => {
        console.log(data);
      })
    ).subscribe();

  }

  // getProduct(id: number): void {
  //   this.productService.getProduct(id).subscribe({
  //     next: product => this.onProductRetrieved(product),
  //     error: err => this.errorMessage = err
  //   });
  // }

  onProductRetrieved(product: Product ): void  {
    this.product = product;

    if (this.product) {
      this.pageTitle = `Product Detail: ${this.product.productName}`;
    } else {
      this.pageTitle = 'No product found';
    }
  }
}
