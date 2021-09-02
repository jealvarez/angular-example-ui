import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthorityGroup } from '../../models/authority-group';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthorityGroupService {
  private _authorityGroupResource: string =
    'http://127.0.0.1:5000/api/authority-groups';

  constructor(private _httpClient: HttpClient) {}

  public getAuthorityGroups(): Observable<AuthorityGroup[]> {
    return this._httpClient.get<AuthorityGroup[]>(this._authorityGroupResource);
  }

  public getAuthorityGroupById(id: number): Observable<AuthorityGroup> {
    return this._httpClient.get<AuthorityGroup>(
      this._authorityGroupResource.concat('/' + id)
    );
  }

  public createAuthorityGroup(
    authorityGroup: AuthorityGroup
  ): Observable<AuthorityGroup> {
    let authorityGroupSerialized = JSON.stringify(authorityGroup);
    return this._httpClient.post<AuthorityGroup>(
      this._authorityGroupResource,
      authorityGroupSerialized
    );
  }

  public updateAuthorityGroup(
    authorityGroup: AuthorityGroup
  ): Observable<AuthorityGroup> {
    let authorityGroupSerialized = JSON.stringify(authorityGroup);

    return this._httpClient.put<AuthorityGroup>(
      this._authorityGroupResource,
      authorityGroupSerialized
    );
  }

  public deleteAuthorityGroup(id: number): Observable<number> {
    return this._httpClient.delete<number>(
      this._authorityGroupResource.concat('/' + id)
    );
  }
}
