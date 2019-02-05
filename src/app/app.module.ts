import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from './material.module';
import { ConflictsComponent } from './conflicts/conflicts.component';
import { CdkDetailRowDirective } from './conflicts/cdk-detail-row.directive';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LabelInfoComponent } from './label-info/label-info.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { CreateComponent } from './create/create.component';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { AngularFontAwesomeModule } from 'angular-font-awesome';


@NgModule({
  declarations: [
    AppComponent,
    ConflictsComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
    LabelInfoComponent,
    HeaderComponent,
    MenuComponent,
    CreateComponent,
    CdkDetailRowDirective


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFileUploaderModule,
    AngularFontAwesomeModule

  ],

  providers: [],
  entryComponents: [ConflictsComponent],
  bootstrap: [AppComponent],

})
export class AppModule { }
