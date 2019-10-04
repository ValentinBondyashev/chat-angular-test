import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from '@app/material';
import { TranslateModule } from '@ngx-translate/core';
import { AvatarComponent } from '@app/shared/avatar/avatar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ChatsComponent } from './components/chats/chats.component';
import { CallsComponent } from './components/calls/calls.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NotificationsComponent } from './components/notifications/notifications.component';


@NgModule({
  declarations: [UserInfoComponent, SidebarComponent, AvatarComponent, SearchBarComponent, NavigationBarComponent,
    ChatsComponent, CallsComponent, ContactsComponent, NotificationsComponent],
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
