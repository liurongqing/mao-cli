import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

import { GaService } from './shared/ga/ga';
import { NavigationFocusService } from './shared/navigation-focus/navigation-focus.service';
import { Subscription } from 'rxjs';
import { map, pairwise, startWith } from 'rxjs/operators';
import { Router} from '@angular/router'; //导入router服务


@Component({
  selector: 'material-docs-app',
  templateUrl: './material-docs-app.html',
  styleUrls: ['./material-docs-app.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class MaterialDocsApp implements OnDestroy {
  private subscriptions = new Subscription();

  constructor(router: Router, ga: GaService, navigationFocusService: NavigationFocusService) {
    // 404 重定向
    this.redirect(router)

    this.subscriptions.add(navigationFocusService.navigationEndEvents.pipe(
      map(e => e.urlAfterRedirects),
      startWith(''),
      pairwise()
    ).subscribe(([fromUrl, toUrl]) => {
      // We want to reset the scroll position on navigation except when navigating within
      // the documentation for a single component.
      if (!navigationFocusService.isNavigationWithinComponentView(fromUrl, toUrl)) {
        resetScrollPosition();
      }
      ga.locationChanged(toUrl);
    }));
  }

  redirect(router: Router){
    const redirect = new URLSearchParams(location.search).get('redirect')
    if (redirect) {
      router.navigateByUrl(decodeURIComponent(redirect))
    }
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}

function resetScrollPosition() {
  if (typeof document === 'object' && document) {
    const sidenavContent = document.querySelector('.mat-drawer-content');
    if (sidenavContent) {
      sidenavContent.scrollTop = 0;
    }
  }
}
