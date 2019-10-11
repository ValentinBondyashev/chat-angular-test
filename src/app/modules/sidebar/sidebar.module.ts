import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MaterialModule } from '../../material';
import { TranslateModule } from '@ngx-translate/core';
import { AvatarComponent } from '../../shared/avatar/avatar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ChatsComponent } from './components/chats/chats.component';
import { CallsComponent } from './components/calls/calls.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { CreateChatComponent } from './components/create-chat/create-chat.component';
import { CreateChatModalComponent } from './components/create-chat-modal/create-chat-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserInfoComponent, SidebarComponent, AvatarComponent, SearchBarComponent, NavigationBarComponent,
    ChatsComponent, CallsComponent, ContactsComponent, NotificationsComponent, CreateChatComponent, CreateChatModalComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    SidebarComponent
  ],
  entryComponents: [CreateChatModalComponent]
})
export class SidebarModule {
}
