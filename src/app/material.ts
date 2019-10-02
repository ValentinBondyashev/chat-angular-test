import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatIconModule
} from '@angular/material';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  imports: [
  ],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatMenuModule
  ]
})
export class MaterialModule {}
