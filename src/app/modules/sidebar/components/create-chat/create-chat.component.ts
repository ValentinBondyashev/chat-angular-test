import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreateChatModalComponent } from '@module/sidebar/components/create-chat-modal/create-chat-modal.component';

@Component({
  selector: 'app-create-chat',
  templateUrl: './create-chat.component.html',
  styleUrls: ['./create-chat.component.scss']
})
export class CreateChatComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateChatModalComponent, {
      width: '250px',
    });
  }

}
