
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];

  dataLoaded = false;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(res => {

      this.products = res.data;
      this.dataLoaded = true;
    });
  }

}
