import { Component, OnInit } from '@angular/core';

import { Router } from "@angular/router";

import { AuthorityGroupService } from '../service/authority-group.service'
import { AuthorityGroup } from '../../models/authority-group'

@Component({
  selector: 'angular-authority-group-list',
  templateUrl: './authority-group-list.component.html',
})
export class AuthorityGroupListComponent implements OnInit {

  public authorityGroups: AuthorityGroup[];

  constructor(private _router: Router,
    private _authorityGroupService: AuthorityGroupService) {
      this.authorityGroups = new Array<AuthorityGroup>();
  }

  public ngOnInit(): void {
    this.getAuthorityGroups();
  }

  public onDelete(id: number, index: number): boolean {
    this._authorityGroupService.deleteAuthorityGroup(id)
      .subscribe(response => {
        this.authorityGroups.splice(index, 1);
      });

    return false;
  }

  private getAuthorityGroups(): void {
    this._authorityGroupService.getAuthorityGroups()
      .subscribe((response: AuthorityGroup[]) => {
        this.authorityGroups = response;
      });
  }

}