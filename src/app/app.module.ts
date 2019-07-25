// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {path: '', loadChildren: () => HomeModule},
  {path: 'trang-chu', loadChildren: () => HomeModule},
  {path: 'admin', loadChildren: () => AdminModule},
  {path: '**', component: NotFoundComponent},
  {path: '**', redirectTo: '404'}
];


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AdminModule,
    HttpClientModule,
    // BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
