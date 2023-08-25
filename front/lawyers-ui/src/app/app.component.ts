import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lawyers-ui';

  sidebarVisible = true;
  sidebarPosition = 'left';

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
