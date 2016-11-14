import { Routes } from "@angular/router";

import { AuthorityGroupFormComponent } from "../authority-group-form/authority-group-form.component";
import { AuthorityGroupListComponent } from "../authority-group-list/authority-group-list.component";
import { AuthorityGroupComponent } from "../authority-group.component";

export const AUTHORITY_GROUP_ROUTES: Routes = [
  { path: '', component: AuthorityGroupListComponent },
  { path: 'create', component: AuthorityGroupFormComponent },
  { path: ':id', component: AuthorityGroupFormComponent }
];
