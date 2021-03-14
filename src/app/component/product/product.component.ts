
import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[] = [];
  dataLoaded = false;

  constructor(private productService: ProductService,
    private activatedRoot: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoot.params.subscribe(prm => {
      if (prm["categoryId"]) {
        this.getProductsByCategory(prm["categoryId"]);
      }
      else {
        this.getProducts();
      }
    });
  }

  getProducts() {

    this.productService.getProducts().subscribe(res => {

      this.products = res.data;
      this.dataLoaded = true;
    });
  }

  getProductsByCategory(categoryId: number) {

    this.productService.getProductsByCategory(categoryId).subscribe(res => {

      this.products = res.data;
      this.dataLoaded = true;
    });
  }

}
