import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-binding',
  templateUrl: './component-binding.component.html',
  styles: [
    `
      code {
        border-radius: 0 0 5px 5px;
      }
    `,
  ],
})
export class ComponentBindingComponent implements OnInit {
  interpolation: string = '{{ ... }}';
  propertyBind: string = '[...]';
  eventBind: string = '(...)';
  superHero: string = '{{ superHero }}';
  calc: string = '{{ 1 + 1 }}';
  isFalse: string = '{{ isFalse }}';
  clickBtn: string = '[disabled]="isRight" (click)="enableBtn()"';
  constructor() {}

  ngOnInit(): void {}
}
