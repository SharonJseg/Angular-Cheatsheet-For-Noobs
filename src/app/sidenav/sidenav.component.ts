import { Component, OnInit, Output } from '@angular/core';
import { SideNavItem } from '../intefaces/side-nav-item';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styles: [],
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
          title: 'Test',
          link: 'test link',
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
