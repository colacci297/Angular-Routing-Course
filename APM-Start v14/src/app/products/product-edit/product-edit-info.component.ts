import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Product } from '../product';
import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  templateUrl: './product-edit-info.component.html'
})
export class ProductEditInfoComponent implements OnInit {
  @ViewChild(NgForm) productForm?: NgForm;

  errorMessage: string | undefined;
  product: Product | undefined;
  constructor(private route: ActivatedRoute){  }

  ngOnInit(): void {
    this.route.parent?.data.subscribe(data => {
      this.product = data['product'].product;
    })
  }
}
