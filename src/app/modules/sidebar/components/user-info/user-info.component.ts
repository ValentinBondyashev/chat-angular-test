import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ThemeService } from '../../../../theme/index';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  constructor(private translate: TranslateService, private themeService: ThemeService) {
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
