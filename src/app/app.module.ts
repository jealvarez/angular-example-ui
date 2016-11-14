import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { MainApplicationComponent } from './main-application.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AuthorityGroupComponent } from './authority-group';
import { AuthorityGroupListComponent } from './authority-group';
import { AuthorityGroupFormComponent } from './authority-group';

import { AuthorityGroupService } from './authority-group';

import { MAIN_ROUTES } from './main-application.routes';

@NgModule({
  declarations: [
    MainApplicationComponent,
    HeaderComponent,
    AuthorityGroupListComponent,
    AuthorityGroupFormComponent,
    AuthorityGroupComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(MAIN_ROUTES)
  ],
  providers: [AuthorityGroupService],
  bootstrap: [MainApplicationComponent]
})
export class AppModule { }
