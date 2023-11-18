import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { CreateContractComponent } from './create-contract/create-contract.component';
import { CdiComponent } from './cdi/cdi.component';
import { CddComponent } from './cdd/cdd.component';
import { NavbarComponent } from './navbar/navbar.component'
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { AccueilComponent } from './accueil/accueil.component';
import { VerifyContractComponent } from './verify-contract/verify-contract.component';
import { AboutUSComponent } from './about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    InscriptionComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    CreateContractComponent,
    CdiComponent,
    CddComponent,
    NavbarComponent,
    AccueilComponent,
    VerifyContractComponent,
    AboutUSComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NgxImageZoomModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
