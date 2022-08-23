import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-read',
  templateUrl: './product-read.component.html',
  styleUrls: ['./product-read.component.css']
})
export class ProductReadComponent implements OnInit {
  products: Product[]
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private productService: ProductService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.get()
  }
  get() {
    this.productService.read().subscribe(products => {
      this.products = products
      console.log(products)
    })
  }

  deleteProduct(productId: number): void {
    this.productService.delete(productId).subscribe((product) => {
      this.productService.showMessage("Produto excluido com sucesso!")
      this.get()
    });
  }

}
