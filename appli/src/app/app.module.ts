import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatIconModule, MatToolbarModule, MatSidenavModule, MatCheckboxModule,
         MatButtonModule, MatExpansionModule, MatListModule, MatMenuModule,
         MatCardModule, MatFormFieldModule, MatInputModule, MatGridListModule,
         MatProgressSpinnerModule, MatTableModule, MatSelectModule,
         MatAutocompleteModule} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ImagepathPipe } from './pipe/imagepath.pipe';

import { AppComponent } from './app.component';
import { LoginComponent } from './page/login/login.component';
import { JwtInterceptor } from './class/jwt-interceptor';
import { ErrorInterceptor } from './class/error-interceptor';
import {IsSignedInGuard} from './guard/is-signed-in.guard';

import { HomeComponent } from './page/home/home.component';
import { SoinsComponent } from './page/soins/soins.component';
import { AteliersComponent } from './page/ateliers/ateliers.component';
import { ConsultationsComponent } from './page/consultations/consultations.component';
import { IndicationComponent } from './component/indication/indication.component';
import { CategoryComponent } from './component/category/category.component';
import { RegistrationComponent } from './page/registration/registration.component';

import { ProductComponent } from './page/product/product.component';

import { ProfilePageComponent } from './page/profile-page/profile-page.component';
import { ActuComponent } from './component/actu/actu.component';
import { HtmlPipe } from './pipe/html.pipe';
import { ImageComponent } from './component/image/image.component';





const appRoutes: Routes = [
  { path: 'home',
    component: HomeComponent,
    data : { title: 'Accueil' } },
  { path: 'product/:id',
    component: ProductComponent,
    data : { title: 'Fleurs et Elixirs' } },
  { path: 'category',
    component: CategoryComponent,
    data : { title: 'Catégories' } },
  { path: 'soins',
    component: SoinsComponent,
    data : { title: 'Soins énergétiques' } },
  { path: 'ateliers',
    component: AteliersComponent,
    data : { title: 'Ateliers' } },
  { path: 'consultations',
    component: ConsultationsComponent,
    data : { title: 'Consultations' } },
  { path: 'login',
    component: LoginComponent,
    data : { title: 'Connexion' } },
  { path: 'registration',
    component: RegistrationComponent,
    data : { title: 'Enregistrement' } },
  { path: 'profile',
    component: ProfilePageComponent,
    canActivate : [IsSignedInGuard],
    data : { title: 'Profile' } },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full' },
  { path: '**',
    component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    LoginComponent,
    HomeComponent,
    SoinsComponent,
    AteliersComponent,
    ConsultationsComponent,
    CategoryComponent,
    IndicationComponent,
    ImagepathPipe,
    RegistrationComponent,
    ProfilePageComponent,
    ActuComponent,
    HtmlPipe,
    ImageComponent
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
    MatProgressSpinnerModule,
    MatTableModule,
    MatSelectModule,
    MatAutocompleteModule,
    NgbModule,
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
