import {Component, OnInit} from '@angular/core';
import {ResolveEnd, ResolveStart, Router} from '@angular/router';
import {filter, map, Observable, of} from 'rxjs';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent implements OnInit {
  loading$: Observable<boolean> = of(false)

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.loading$ = this.router.events.pipe(
      filter(e => e instanceof ResolveStart || e instanceof ResolveEnd),
      map(e => e instanceof ResolveStart)
    )
  }

}
