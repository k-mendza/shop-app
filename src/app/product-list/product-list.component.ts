import { products } from './../products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products;

  share() {
    window.alert('The product has been shared!');
  }

  constructor() { }

  ngOnInit() {
    this.products = products;
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
