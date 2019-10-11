import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SidebarModule } from '@app/modules/sidebar/sidebar.module';
import { MaterialModule } from '@app/material';
import { darkTheme, lightTheme, ThemeModule } from '@app/theme';
import 'hammerjs';
import { ChatModule } from '@module/chat/chat.module';
import { appReducers } from '@reducer/index';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '@env/environment.prod';
import { AuthModule } from '@module/auth/auth.module';
import { AuthEffect } from '@effect/auth.effects';
import { MainPageModule } from '@module/main-page/main-page.module';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { ContactEffect } from '@effect/contact.effects';
import { UserEffect } from '@effect/user.effects';

const config: SocketIoConfig = { url: 'http://localhost:5000', options: {}};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SidebarModule,
    HttpClientModule,
    ChatModule,
    AuthModule,
    SocketIoModule.forRoot(config),
    MainPageModule,
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot([AuthEffect, ContactEffect, UserEffect]),
    environment.production ? StoreDevtoolsModule.instrument() : [],
    ThemeModule.forRoot({
      themes: [lightTheme, darkTheme],
      active: localStorage.getItem('theme') || 'light'
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [MaterialModule, TranslateModule, ThemeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
