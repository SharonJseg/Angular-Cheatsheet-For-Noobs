import { Component, OnInit, Output } from '@angular/core';
import { SideNavItem } from '../intefaces/side-nav-item';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styles: [
    `
      .sidenav {
        display: flex;
        flex-direction: column;
        font-size: 0.9rem;
        line-height: 0.9rem;
      }
    `,
  ],
})
export class SidenavComponent implements OnInit {
  @Output() sideNavItems: SideNavItem[] = [
    {
      title: 'איך מתקינים Angular',
      link: 'getting-started',
    },
    {
      title: 'קומפוננטות - Components',
      link: 'components-general',
      children: [
        {
          subtitle: 'איך מתקשרים בין האלמנטים',
          sublink: 'components-binding',
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
