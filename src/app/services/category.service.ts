import { Category } from './../models/category';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private httpClient: HttpClient) { }
  
  apiUrl = "https://localhost:44335/api/categories/getall";
  
  getCategories():Observable<ListResponseModel<Category>> {
    
    return this.httpClient.get<ListResponseModel<Category>>(this.apiUrl);
  }

}
