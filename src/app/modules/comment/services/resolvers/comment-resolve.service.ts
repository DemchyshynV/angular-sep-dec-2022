import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

import {IComment} from '../../interfaces';
import {CommentService} from '../comment.service';

@Injectable({
  providedIn: 'root'
})
export class CommentResolveService implements Resolve<IComment> {

  constructor(private commentService: CommentService, private router: Router) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IComment> | Promise<IComment> | IComment {
    const comment = this.router.getCurrentNavigation()?.extras?.state?.['comment'] as IComment;

    if (comment) {
      console.log(comment);
      return comment
    }

    const {id} = route.params;
    return this.commentService.getById(id);
  }
}
