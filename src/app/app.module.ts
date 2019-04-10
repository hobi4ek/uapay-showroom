import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DistributedPaymentsComponent} from './distributed-payments/distributed-payments.component';

@NgModule({
	declarations: [
		AppComponent,
		DistributedPaymentsComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
