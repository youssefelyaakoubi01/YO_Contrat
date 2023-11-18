import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionComponent } from './inscription/inscription.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { CreateContractComponent } from './create-contract/create-contract.component';
import { AccueilComponent } from './accueil/accueil.component';
import { VerifyContractComponent } from './verify-contract/verify-contract.component';
import { AboutUSComponent } from './about-us/about-us.component';

const appRoutes: Routes =[
  {path:'inscription', component: InscriptionComponent },
  {path:'login', component: LoginComponent},
  {path:'create_contract',component: CreateContractComponent},
  {path:'verify_contract',component: VerifyContractComponent},
  {path:'',component: AccueilComponent},
  {path:'aboutUS',component: AboutUSComponent}
  
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
