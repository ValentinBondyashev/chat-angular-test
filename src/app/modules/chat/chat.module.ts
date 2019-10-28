import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatInfoComponent } from './components/chat-info/chat-info.component';
import { InputBlockComponent } from './components/input-block/input-block.component';
import { MessagesBlockComponent } from './components/messages-block/messages-block.component';
import { RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ChatComponent } from '@module/chat/components/chat/chat.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [
  {
    path: 'chat',
    component: ChatComponent,
  },
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
    ChatInfoComponent, InputBlockComponent, MessagesBlockComponent, ChatComponent
  ],
  exports: [ChatInfoComponent, InputBlockComponent, MessagesBlockComponent, ChatComponent]
})

export class ChatModule { }
