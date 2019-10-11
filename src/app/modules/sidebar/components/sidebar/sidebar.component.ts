import { Component, HostListener, OnInit } from '@angular/core';
import { IAppState } from '../../../../store/state/index';
import { select, Store } from '@ngrx/store';
import * as sidebarAction from '../../../../store/actions/sidebar.actions';
import { getSidebarState } from '../../../../store/reducers/index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  open;
  sidebarState;
  public innerWidth: any;

  constructor(private store: Store<IAppState>) {
  }

  ngOnInit() {
    this.sidebarState = this.store.pipe(select((getSidebarState))).subscribe((data) => {
      this.open = data.open;
    });

    this.innerWidth = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.innerWidth = window.innerWidth;
    if (this.open && innerWidth > 725) {
      this.store.dispatch(new sidebarAction.OpenSidebar());
    }
  }
}
