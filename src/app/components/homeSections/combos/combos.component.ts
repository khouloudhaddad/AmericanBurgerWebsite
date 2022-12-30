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
      content: [
       "chocolate",
        "Milkshake"
      ],
      output: "New York Cheesecake",
      price: "€ 0 0"
     },
    { 
      title: "Combo 2",
      product: "Cheese Burger",
      content: [
       "chocolate",
        "Milkshake"
      ],
      output: "Berry Mouffin",
      price: "€ 0 0"
     },
    { 
      title: "Combo 3",
      product: "Double Cheese Burger",
      content: [
      "Banara Milkshake"
      ],
     
      output: "Sacher Cake",
      price: "€ 0 0"
    },

    {
      title: "Combo 4",
      product: "Classic Burger",
      content: [
       "chocolate",
        "Milkshake"
      ],
      output: "New York Cheesecake",
      price: "€ 0 0"
     },
    { 
      title: "Combo 5",
      product: "Cheese Burger",
      content: ["Strawberry", "Milkshake"],
      output: "Berry Mouffin",
      price: "€ 0 0"
     },
    { 
      title: "Combo 6",
      product: "Double Cheese Burger",
      content: [
       "chocolate",
        "Milkshake"
      ],
      output: "Sacher Cake",
      price: "€ 0 0"
    }
  ];
  slideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1
      }
    }
  ]
  };
 
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
