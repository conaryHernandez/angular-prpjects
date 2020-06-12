import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers',
  // selector: '[app-servers]',
  selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'test';
  username = '';
  serverCreated = false;
  servers = ['server1', 'server2'];
  showDetails = false;
  detailsLog = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! ' + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onResetUsername() {
    this.username = '';
  }

  toggleDetails() {
    this.addDetailsLog();
    return (this.showDetails = !this.showDetails);
  }

  addDetailsLog() {
    return this.detailsLog.push(new Date().toISOString());
  }
}
