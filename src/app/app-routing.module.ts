import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormularzComponent } from './formularz/formularz.component';
import { InformacjeComponent } from './informacje/informacje.component';

const routes: Routes = [
{path: 'FormularzComponent', component: FormularzComponent},
{path: 'InformacjeComponent', component: InformacjeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
