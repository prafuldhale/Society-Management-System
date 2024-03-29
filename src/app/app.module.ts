import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatMenuModule} from '@angular/material/menu';
import { MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDatepickerModule } from "@angular/material/datepicker";
import {  MatDialogModule } from "@angular/material/dialog";
import {  MatInputModule } from "@angular/material/input";
import {  MatListModule } from "@angular/material/list";
import {  MatPaginatorModule } from "@angular/material/paginator";
import {  MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import {  MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import {  MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { FormsModule, NgForm, ReactiveFormsModule} from "@angular/forms";
import {MatStepperModule} from '@angular/material/stepper';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatRadioModule} from '@angular/material/radio';
import {MatNativeDateModule} from '@angular/material/core';
import { MatSliderModule} from '@angular/material/slider';
import { MatTooltipModule} from '@angular/material/tooltip';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTreeModule} from '@angular/material/tree';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { HomepageComponent } from './homepage/homepage.component';
import { RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuModule } from 'primeng/menu';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserReportsComponent } from './user-reports/user-reports.component';
import { MembersComponent } from './members/members.component';
import { SocietyChatGroupComponent } from './society-chat-group/society-chat-group.component';
import { FestiveCalendarComponent } from './festive-calendar/festive-calendar.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { FileUploadModule } from 'primeng/fileupload';
import { AnnoucementComponent } from './annoucement/annoucement.component';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { DatePipe } from '@angular/common';



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        DashboardComponent,
        HomepageComponent,
        AdminDashboardComponent,
        UserReportsComponent,
        MembersComponent,
        SocietyChatGroupComponent,
        FestiveCalendarComponent,
        UserSettingsComponent,
        AnnoucementComponent
    ],
    imports: [
        NgxMaterialTimepickerModule,
        FileUploadModule,
        HttpClientModule,
        FormsModule,
        MenuModule,
        MenubarModule,
        RouterModule,
        SidebarModule,
        AvatarModule,
        AvatarGroupModule,
        ButtonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
        MatCardModule,
        MatTabsModule,
        MatSidenavModule,
        MatListModule,
        MatToolbarModule,
        MatTooltipModule,
        MatInputModule,
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatProgressSpinnerModule,
        MatStepperModule,
        MatDialogModule,
        AppRoutingModule,
        MatSelectModule,
        MatCheckboxModule,
        DragDropModule,
        MatRadioModule,
        MatSliderModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule,
        MatGridListModule,
        MatTreeModule,
        ScrollingModule,
        MatSliderModule
    ],
    providers: [
        DatePipe
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}