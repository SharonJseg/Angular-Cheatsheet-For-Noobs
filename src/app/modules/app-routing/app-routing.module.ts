import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Content
import { InitialInstallationComponent } from 'src/app/content/initial-installation/initial-installation.component';
import { ComponentGeneralComponent } from 'src/app/content/component-general/component-general.component';
import { ComponentBindingComponent } from 'src/app/content/component-binding/component-binding.component';

const routes: Routes = [
  { path: '', redirectTo: 'getting-started', pathMatch: 'full' },
  { path: 'getting-started', component: InitialInstallationComponent },
  { path: 'components-general', component: ComponentGeneralComponent },
  { path: 'components-binding', component: ComponentBindingComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
