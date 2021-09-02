import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AuthorityGroupComponent } from './authority-group';
import { AuthorityGroupListComponent } from './authority-group';
import { AuthorityGroupFormComponent } from './authority-group';

import { AuthorityGroupService } from './authority-group';

import { MAIN_ROUTES } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
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
    HttpClientModule,
    RouterModule.forRoot(MAIN_ROUTES)
  ],
  providers: [AuthorityGroupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
