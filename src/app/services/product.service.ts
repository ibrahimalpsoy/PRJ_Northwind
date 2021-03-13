import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  
  apiUrl = "https://localhost:44335/api/products/getall";
  
  getProducts():Observable<ListResponseModel<Product>> {
    
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl);
  }

}
