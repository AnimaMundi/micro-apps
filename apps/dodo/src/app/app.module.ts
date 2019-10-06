import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ServiceWorkerModule } from '@angular/service-worker';
import { AngularFireModule } from '@angular/fire';
import { AngularFirePerformanceModule } from '@angular/fire/performance';

import { environment } from '../environments/environment';
import { AppStoreModule } from './app-store.module';
import { AppComponent } from './app.component';
import { HeaderModule, UpdateAvailableModule } from './components';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirePerformanceModule,
    AppStoreModule,
    AppRoutingModule,
    HeaderModule,
    UpdateAvailableModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
