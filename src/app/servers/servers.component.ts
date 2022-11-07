import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server created!";
  serverName = "TestServer";
  username = "";
  serverCreated = false;
  servers = ['Testserver', 'Testserver2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
   }
  TrueOrFalse: boolean;

  ngOnInit(): void {
  }

  success() {
    this.TrueOrFalse = true;
  }

  fail() {
    this.TrueOrFalse = false;
  }

  onCreateServer() {
    this.servers.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  resetUsername() {
    this.username = "";
  }
}
