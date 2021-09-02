import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, Params } from "@angular/router";
import { AuthorityGroupService } from '../service/authority-group.service';
import { AuthorityGroup } from '../../models/authority-group';
import { Subscription } from 'rxjs';

@Component({
  selector: 'angular-authority-group-form',
  templateUrl: './authority-group-form.component.html'
})
export class AuthorityGroupFormComponent implements OnInit {

  public authorityGroupForm: FormGroup;
  public isNew: boolean = true;
  private _subscription: Subscription;
  private _authorityGroup: AuthorityGroup;

  constructor(private _formBuilder: FormBuilder,
    private _router: Router,
    private _activeRoute: ActivatedRoute,
    private _authorityGroupService: AuthorityGroupService) {
      this.authorityGroupForm = this.initializeDefaultForm();
      this._subscription = this.createParameterSubscription();
      this._authorityGroup = new AuthorityGroup();
     }

  public ngOnInit(): void {
    this.initializeDefaultForm();
    this.createParameterSubscription();
  }

  public onSubmit(): void {
    let authorityGroup = this.authorityGroupForm.value;
    if (this.isNew) {
      this._authorityGroupService.createAuthorityGroup(authorityGroup)
        .subscribe(response => {
          this._router.navigate(['authority-groups']);
        });
    } else {
      this._authorityGroupService.updateAuthorityGroup(authorityGroup)
        .subscribe(response => {
          this._router.navigate(['authority-groups']);
        });;
    }
  }

  public onBack(): void {
    this._router.navigate(['authority-groups']);
  }

  private initializeDefaultForm(authorityGroup?: AuthorityGroup): FormGroup {
    return this._formBuilder.group({
      id: authorityGroup ? authorityGroup.id : 0,
      name: authorityGroup ? authorityGroup.name : '',
      description: authorityGroup ? authorityGroup.description : '',
      enabled: authorityGroup ? authorityGroup.enabled : false
    });
  }

  private createParameterSubscription(): Subscription {
    // Verify if it's for edit
    return this._activeRoute.params.subscribe(
      (parameters: Params) => {
        let id: number = +parameters['id']; // (+) Converts string 'id' to a number
        if (id && id > 0) {
          this._authorityGroupService.getAuthorityGroupById(id)
            .subscribe((authorityGroup: AuthorityGroup) => {
              this.isNew = false;
              this.initializeDefaultForm(authorityGroup);
            });
        }
      });
  }

}
