import { AuthorityGroupListComponent } from './../authority-group-list/authority-group-list.component';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { AuthorityGroup } from '../../models/authority-group';

@Injectable()
export class AuthorityGroupService {

  private _authorityGroupResource: string = "http://127.0.0.1:5000/api/authority-groups";

  constructor(private _http: Http) { }

  public getAuthorityGroups(): Observable<AuthorityGroup[]> {
    return this._http.get(this._authorityGroupResource)
      .map((response: Response) => response.json());
  }

  public getAuthorityGroupById(id: number): Observable<AuthorityGroup> {
    return this._http.get(this._authorityGroupResource.concat("/" + id))
      .map((response: Response) => response.json())
  }

  public createAuthorityGroup(authorityGroup: AuthorityGroup): Observable<AuthorityGroup> {
    let authorityGroupSerialized = JSON.stringify(authorityGroup);
    return this._http.post(this._authorityGroupResource, authorityGroupSerialized, this.getHeaderOptions())
      .map((response: Response) => response.json());
  }

  public updateAuthorityGroup(authorityGroup: AuthorityGroup): Observable<AuthorityGroup> {
    let authorityGroupSerialized = JSON.stringify(authorityGroup);

    return this._http.put(this._authorityGroupResource, authorityGroupSerialized, this.getHeaderOptions())
      .map((response: Response) => response.json());
  }

  public deleteAuthorityGroup(id: number): Observable<number> {
    return this._http.delete(this._authorityGroupResource.concat("/" + id))
      .map((response: Response) => response.json());
  }

  private getHeaderOptions(): RequestOptions {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let requestOptions = new RequestOptions({ headers: headers });

    return requestOptions;
  }

}