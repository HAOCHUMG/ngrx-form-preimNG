import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyMachineComponent } from './apply-machine/apply-machine.component';
import { InformationMachineComponent } from './information-machine/information-machine.component';
const routes: Routes = [
  {path:'apply',component:ApplyMachineComponent},
  {path:'info',component:InformationMachineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
