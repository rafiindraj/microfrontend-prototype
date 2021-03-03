import { Component, OnInit } from '@angular/core';
import { ShellService } from '../../../../../apps/appshell/src/app/shell/shell.service';
// import { ShellService } from '@myorg/apps/';

@Component({
  selector: 'myorg-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private shellService : ShellService) { }

  navigate(url: string) {
    this.shellService.navigate(url);
}

  ngOnInit(): void {
  }

}
