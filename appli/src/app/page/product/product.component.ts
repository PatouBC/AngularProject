import { Component, OnInit } from '@angular/core';
import {Category} from '../../class/category';
import {Product} from '../../class/product';
import {Indication} from '../../class/indication';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../service/category.service';
import {ProductService} from '../../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

    category: Category;
    products: Product[];
    product: Product;
    indications: Indication[];

    constructor(private router: Router,
                private catServ: CategoryService,
                private activatedRoute: ActivatedRoute,
                private prodServ: ProductService) {
    }

    ngOnInit() {

        this.activatedRoute.params
            .subscribe((params) => {
                this.prodServ.getProductsByCategory(params.id)
                    .subscribe((products: Product[]) => {
                        this.products = products;
                        this.getIndications();
                    });
            });
        this.activatedRoute.params
            .subscribe((params) => {
                this.catServ.getCategory(params.id)
                    .subscribe((category: Category) => {
                        this.category = category;
                    });
            });
    }

    getIndications() {
        const indicationControl = {};
        this.indications = [];
        this.products.map((product) => {
            const indics = product.indications;
            indics.map((indication) => {
                if (! indicationControl[indication.id]) {
                    indicationControl[indication.id] = indication;
                    this.indications.push(indication);
                }
            });
        });
    }

}
