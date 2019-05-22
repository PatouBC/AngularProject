import { Component, OnInit } from '@angular/core';
import {Category} from '../../class/category';
import { CategoryService } from '../../service/category.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  error: boolean;
  categories: Category[];
  loading: boolean;


  constructor(private catServ: CategoryService, private router: Router) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.catServ.getCategories()
        .subscribe((data: Category[]) => {
          this.categories = data;
        });
  }

}
