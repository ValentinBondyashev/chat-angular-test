import { Component, OnInit } from '@angular/core';
import * as sidebarAction from '../../../../store/actions/sidebar.actions';
import { IAppState } from '../../../../store/state/index';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
  }

  openSidebar() {
    this.store.dispatch(new sidebarAction.OpenSidebar());
  }

}
