import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { CategoryService} from '../../../service/category.service';
import { Category} from '../../../class/category';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-category-show',
  templateUrl: './category-show.component.html',
  styleUrls: ['./category-show.component.scss']
})
export class CategoryShowComponent implements OnInit {
  catForm: FormGroup;
  category: Category;
  active = false;

  constructor(private router: Router,
              private catServ: CategoryService,
              private activatedRoute: ActivatedRoute,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.catForm = this.fb.group({
        description: ['', Validators.required]
    });
    this.activatedRoute.params
        .subscribe((params) => {
          this.catServ.getCategory(params.id)
              .subscribe((category: Category) => {
                this.category = category;
              });
        });
  }

}
