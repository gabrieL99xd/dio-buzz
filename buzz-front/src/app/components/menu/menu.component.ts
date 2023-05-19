import { Component , OnInit } from '@angular/core';
import { Router , NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})

export class MenuComponent implements OnInit {

  menuOptions = [
    { label: 'Home', link: '/', active: true },
    { label: 'Oficina', link: '/quizz', active: true },
  ];

  constructor(private router: Router) {

  }

  ngOnInit(): void {
      const currentUrl = this.router.url;
      this.menuOptions.forEach((option) => {
        if (option.link !== currentUrl) {
          option.active = false;
        }
      });
  }

}
