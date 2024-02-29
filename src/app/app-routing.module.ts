import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserReportsComponent } from './user-reports/user-reports.component';
import { MembersComponent } from './members/members.component';
import { SocietyChatGroupComponent } from './society-chat-group/society-chat-group.component';
import { FestiveCalendarComponent } from './festive-calendar/festive-calendar.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';
import { AnnoucementComponent } from './annoucement/annoucement.component';
const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'userreports', component: UserReportsComponent },
      { path: 'chat', component: SocietyChatGroupComponent },
      { path: 'festive-calender', component: FestiveCalendarComponent},
      { path: 'user-setting', component: UserSettingsComponent},
      { path: 'homepage', component: HomepageComponent },
      { path: 'society-members', component: MembersComponent },
    ],
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      {path:"eventmanager", component: AnnoucementComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
