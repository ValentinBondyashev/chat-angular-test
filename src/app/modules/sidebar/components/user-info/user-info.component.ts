import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../../../../theme/index';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  token;
  userInfo;
  constructor(private translate: TranslateService, private themeService: ThemeService) {
    this.token = localStorage.getItem('token');
    this.userInfo = jwt_decode(this.token);
  }

  ngOnInit() {
  }

  changeTheme(theme) {
    this.themeService.setTheme(theme);
  }

  changeLanguage(language) {
    this.translate.use(language);
  }
}
