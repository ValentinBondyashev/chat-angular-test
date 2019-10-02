import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {
  @Input() userInfo;

  constructor() {
  }

  ngOnInit() {
  }

  renderStatus(): string {
    if (this.userInfo.status) {
      return 'status status' + '-' + this.userInfo.status;
    }
    return '';
  }

}
