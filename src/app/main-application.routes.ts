import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./home/home.component";
import { AuthorityGroupListComponent } from "./authority-group";
import { AuthorityGroupComponent } from "./authority-group";
import { AUTHORITY_GROUP_ROUTES } from "./authority-group";

export const MAIN_ROUTES: Routes = [
  { path: 'authority-groups', component: AuthorityGroupComponent, children: AUTHORITY_GROUP_ROUTES },
  { path: '', component: HomeComponent }
];