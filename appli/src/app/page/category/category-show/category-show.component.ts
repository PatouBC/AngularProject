import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {CategoryService} from '../../../service/category.service';
import {Category} from '../../../class/category';
import {ProductService} from '../../../service/product.service';
import {Product} from '../../../class/product';
import {IndicationService} from '../../../service/indication.service';
import {Indication} from '../../../class/indication';

@Component({
    selector: 'app-category-show',
    templateUrl: './category-show.component.html',
    styleUrls: ['./category-show.component.scss']
})
export class CategoryShowComponent implements OnInit {

    category: Category;
    products: Product[];
    indications: Indication[];

    constructor(private router: Router,
                private catServ: CategoryService,
                private activatedRoute: ActivatedRoute,
                private prodServ: ProductService,
                private indServ: IndicationService) {
    }

    ngOnInit() {

        this.activatedRoute.params
            .subscribe((params) => {
                this.catServ.getCategory(params.id)
                    .subscribe((category: Category) => {
                        this.category = category;
                    });
            });
        this.getProducts();
        this.getIndications();
    }

    getProducts() {
        this.prodServ.getProducts()
            .subscribe((data: Product[]) => {
                this.products = data;
            });

    }

    getIndications() {
        this.indServ.getIndications()
            .subscribe((data: Indication[]) => {
                this.indications = data;
            });
    }
}
