import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CreateChatModalComponent } from '@module/sidebar/components/create-chat-modal/create-chat-modal.component';
import { CreateContactModalComponent } from '@module/sidebar/components/create-contact-modal/create-contact-modal.component';

@Component({
  selector: 'app-create-block',
  templateUrl: './create-block.component.html',
  styleUrls: ['./create-block.component.scss']
})
export class CreateBlockComponent implements OnInit {
  @Input('type') type;

  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  openDialog(): void {
    let component;
    switch (this.type) {
      case 'Chat':
        component = CreateChatModalComponent;
        break;
      case 'Contact':
        component = CreateContactModalComponent;
        break;
    }
    const dialogRef = this.dialog.open(component, {
      width: '250px',
    });
  }
}
