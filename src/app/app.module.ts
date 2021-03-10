import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransactionComponent } from './containers/transactions-log/containers/transaction/transaction.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TransactionDetailComponent } from './containers/transactions-log/containers/transaction-detail/transaction-detail.component';
import {MatButtonModule} from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NewTransactionComponent } from './containers/transactions-log/containers/new-transaction/new-transaction.component';
import { FormsModule } from '@angular/forms';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeTopBarComponent } from './components/home-top-bar/home-top-bar.component';
import { HomeComponent } from './containers/home/home.component';
import { TaskTrackerComponent } from './containers/tasks/task-tracker/task-tracker.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    TransactionComponent,
    TransactionDetailComponent,
    NewTransactionComponent,
    TopBarComponent,
    SignupComponent,
    LoginComponent,
    HomeTopBarComponent,
    HomeComponent,
    TaskTrackerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    FormsModule
    
  ],
  providers: [{provide:LocationStrategy,useClass:HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
