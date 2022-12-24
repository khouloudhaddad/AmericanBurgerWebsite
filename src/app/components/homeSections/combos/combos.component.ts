import { Component } from '@angular/core';

@Component({
  selector: 'app-combos',
  templateUrl: './combos.component.html',
  styleUrls: ['./combos.component.scss']
})
export class CombosComponent {
  slides = [
    { 
      title: "Combo 1",
      product: "Classic Burger",
      content: {
        item1: "chocolate",
        item2: "Milkshake"
      },
      output: "New York Cheesecake",
      price: "€00"
     },
    { 
      title: "Combo 2",
      product: "Cheese Burger",
      content: {
        item1: "Strawberry",
        item2: "Milkshake"
      },
      output: "Berry Mouffin",
      price: "€00"
     },
    { 
      title: "Combo 3",
      product: "Double Cheese Burger",
      content: {
        item1: "Banara Milkshake"
      },
      output: "Sacher Cake",
      price: "€00"
    },

    { 
      title: "Combo 4",
      product: "Classic Burger",
      content: {
        item1: "chocolate",
        item2: "Milkshake"
      },
      output: "New York Cheesecake",
      price: "€00"
     },
    { 
      title: "Combo 5",
      product: "Cheese Burger",
      content: {
        item1: "Strawberry",
        item2: "Milkshake"
      },
      output: "Berry Mouffin",
      price: "€00"
     },
    { 
      title: "Combo 6",
      product: "Double Cheese Burger",
      content: {
        item1: "Banara Milkshake"
      },
      output: "Sacher Cake",
      price: "€00"
    }
  ];
  slideConfig = { slidesToShow: 3, slidesToScroll: 1, "infinite": true , "arrows": true,};
 
    slickInit(e: any) {
      console.log('slick initialized');
    }
    breakpoint(e: any) {
      console.log('breakpoint');
    }
  
  constructor() {}
  ngOnInit(): void { }
  
  isOdd(n:any) {
    return Math.abs(n % 2) == 1;
  }
}
