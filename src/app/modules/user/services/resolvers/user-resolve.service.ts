import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {IUser} from '../../interfaces';
import {UserService} from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<IUser> {

  constructor(private userService: UserService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {
    const {id} = route.params;
    return this.userService.getById(id);
  }
}
