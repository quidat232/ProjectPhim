import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import { RouterModule, Routes} from '@angular/router'
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import { PipeModule } from './pipe/pipe.module';

const appRoutes:Routes = [
  {path:'', loadChildren:() => HomeModule},
  {path:'home', loadChildren:() => HomeModule},
  {path:'admin', loadChildren: () => AdminModule}
]


@NgModule({
  declarations: [
    AppComponent,
    

  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    AdminModule,
    HttpModule,
    HttpClientModule,
    NgxPaginationModule,
    PipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
