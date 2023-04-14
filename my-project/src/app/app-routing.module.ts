import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PolicydeliveryComponent } from './infor/policydelivery/policydelivery.component';
import { PolicypaymentComponent } from './infor/policypayment/policypayment.component';
import { PolicysecurityComponent } from './infor/policysecurity/policysecurity.component';
import { PolicywarrantyComponent } from './infor/policywarranty/policywarranty.component';
import { MemberpointComponent } from './infor/memberpoint/memberpoint.component';
import { InstructionComponent } from './infor/instruction/instruction.component';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './infor/overview/overview.component';

const routes: Routes = [
  {path:"app-home", component:HomeComponent},
  {path:"app-instruction",component:InstructionComponent},
  {path:"app-memberpoint",component:MemberpointComponent},
  {path:"app-policypayment",component:PolicypaymentComponent},
  {path:"app-policydelivery",component:PolicydeliveryComponent},
  {path:"app-policywarranty",component:PolicywarrantyComponent},
  {path:"app-policysecurity",component:PolicysecurityComponent},
  {path:"app-overview",component:OverviewComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent=[
InstructionComponent,
MemberpointComponent,
PolicydeliveryComponent,
PolicypaymentComponent,
PolicysecurityComponent,
PolicywarrantyComponent,
OverviewComponent

  
]