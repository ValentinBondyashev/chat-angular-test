import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { InputBlockComponent } from './components/input-block/input-block.component';
import { MessagesBlockComponent } from './components/messages-block/messages-block.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ChatComponent } from '@module/chat/components/chat/chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TranslateModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    UserInfoComponent, InputBlockComponent, MessagesBlockComponent, ChatComponent
  ],
  exports: [UserInfoComponent, InputBlockComponent, MessagesBlockComponent, ChatComponent]
})

export class ChatModule { }
