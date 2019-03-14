import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { AdminModule } from './admin/admin.module';
import {RouterModule, Routes} from '@angular/router'
import { LayoutHomeComponent } from './home/layout-home/layout-home.component';
import { LayoutAdminComponent } from './admin/layout-admin/layout-admin.component';
import { TrangchuComponent } from './home/trangchu/trangchu.component';

const appRoutes:Routes = [
  {path:'', loadChildren:() => HomeModule},
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
    HttpModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
