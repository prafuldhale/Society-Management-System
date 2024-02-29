import { Component, ViewChild } from '@angular/core';
import { Sidebar } from 'primeng/sidebar';
import { MenuItem } from 'primeng/api';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MenuModule } from 'primeng/menu';
import { Router, NavigationStart } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  title = "Dashboard";
  DashboardName = "Explorer";
  constructor(private router: Router, private cookieService: CookieService){
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        console.log('Navigation started:', event);
      }
    });
  }
  @ViewChild('sidebarRef') sidebarRef!: Sidebar;

  closeCallback(e: Event): void {
  }

  sidebarVisible: boolean = true;

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'File',
        icon: 'pi pi-fw pi-file',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'Annoucement',
                icon: 'pi pi-fw pi-megaphone'
              },
              {
                label: 'Bills',
                icon: 'pi pi-fw pi-video'
              }
            ]
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-trash'
          },
          {
            separator: true
          },
          {
            label: 'Export',
            icon: 'pi pi-fw pi-external-link'
          }
        ]
      },
      {
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus'
          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus'
          },
          {
            label: 'Approve User',
            icon: 'pi pi-fw pi-users',
            
          }
        ]
      },
      {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Edit',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'Save',
                icon: 'pi pi-fw pi-calendar-plus'
              },
              {
                label: 'Delete',
                icon: 'pi pi-fw pi-calendar-minus'
              }
            ]
          }
        ]
      },

      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off',
        command: () => this.logOut()
      }
    ];
  }

  logOut(){
    console.log("Quiting");
    
    this.cookieService.deleteAll();
    this.router.navigate(["/"]);
    
  } 

}
