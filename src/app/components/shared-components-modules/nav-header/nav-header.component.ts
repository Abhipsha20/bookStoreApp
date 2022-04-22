import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.css']
})
export class NavHeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  takeMeToCart(event){
    this.router.navigate['cart'];
  }
  takeMeHome(event){
    sessionStorage.setItem('genre','');
    this.router.navigate[''];
  }

}
