import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'americanBurger';

  ngOnInit()
  {
    window.addEventListener('scroll', function() {
      navbarScroll();
     });
     function navbarScroll() {
       var y = window.scrollY;
       if (y > 10) {
         var header = document.getElementsByTagName('header')[0];
           header.classList.add('fixedTop');
     
       } else if (y < 10) {
           var header = document.getElementsByTagName('header')[0];
          header.classList.remove('fixedTop');
       }
     }
  }
}
