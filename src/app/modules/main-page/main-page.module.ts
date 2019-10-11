import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from '@module/main-page/components/main-page/main-page.component';
import { RouterModule } from '@angular/router';
import { SidebarModule } from '@module/sidebar/sidebar.module';



@NgModule({
  declarations: [MainPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([ {
      path: '',
      component: MainPageComponent,
    }]),
    SidebarModule,
  ],
  exports: [MainPageComponent]
})
export class MainPageModule { }
