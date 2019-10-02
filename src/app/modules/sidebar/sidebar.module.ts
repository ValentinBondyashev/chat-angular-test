import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info/user-info.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MaterialModule } from '@app/material';
import { TranslateModule } from '@ngx-translate/core';
import { AvatarComponent } from '@app/shared/avatar/avatar.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ChatsComponent } from './chats/chats.component';
import { CallsComponent } from './calls/calls.component';
import { ContactsComponent } from './contacts/contacts.component';
import { NotificationsComponent } from './notifications/notifications.component';


@NgModule({
  declarations: [UserInfoComponent, SidebarComponent, AvatarComponent, SearchBarComponent, NavigationBarComponent, ChatsComponent, CallsComponent, ContactsComponent, NotificationsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule {
}
