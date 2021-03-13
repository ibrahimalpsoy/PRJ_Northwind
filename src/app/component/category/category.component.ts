import { Category } from './../../models/category';
import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  categories: Category[] = [];
  currentCategory: Category;

  dataLoaded = false;

  constructor(private categoryService: CategoryService) { }

  ngOnInit(): void {

    this.getCategories();
  }

  getCategories() {
    this.categoryService.getCategories().subscribe(res => {

      this.categories = res.data;
      this.dataLoaded = true;
    });
  }

  setCurrentCategory(category: Category) {
    this.currentCategory = category;
  }
  
  getCurrentCategoryClass(category: Category) {

    if (category == this.currentCategory) {
      return "list-group-item active"
    }
    else {
      return "list-group-item"
    }

  }
}
