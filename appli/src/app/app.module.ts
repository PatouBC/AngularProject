import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule, MatToolbarModule, MatSidenavModule, MatCheckboxModule,
         MatButtonModule, MatExpansionModule, MatListModule, MatMenuModule,
         MatCardModule, MatFormFieldModule, MatInputModule, MatGridListModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { JwtInterceptor } from './class/jwt-interceptor';
import { ErrorInterceptor } from './class/error-interceptor';
import { HomeComponent } from './page/home/home.component';
import { ProductComponent } from './page/product/product.component';
import { SoinsComponent } from './page/soins/soins.component';
import { AteliersComponent } from './page/ateliers/ateliers.component';
import { ConsultationsComponent } from './page/consultations/consultations.component';
import { CategoryComponent } from './page/category/category.component';
import { IndicationComponent } from './page/indication/indication.component';
import { ImagepathPipe } from './pipe/imagepath.pipe';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent, data : { title: 'Accueil' } },
  { path: 'product', component: ProductComponent, data : { title: 'Fleurs et Elixirs' } },
  { path: 'category', component: CategoryComponent, data : { title: 'Catégories' } },
  { path: 'soins', component: SoinsComponent, data : { title: 'Soins énergétiques' } },
  { path: 'ateliers', component: AteliersComponent, data : { title: 'Ateliers' } },
  { path: 'consultations', component: ConsultationsComponent, data : { title: 'Consultations' } },
  { path: 'login', component: LoginComponent, data : { title: 'Connexion' } },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    LoginComponent,
    HomeComponent,
    ProductComponent,
    SoinsComponent,
    AteliersComponent,
    ConsultationsComponent,
    CategoryComponent,
    IndicationComponent,
    ImagepathPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatListModule,
    MatExpansionModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
