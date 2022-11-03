import { Component, Input } from "@angular/core";

@Component ({
  selector: 'success-warning-alerts',
  templateUrl: './success-warning-alerts.component.html',
  styleUrls: ['./success-warning-alerts.component.css']
})

export class Alerts{

  @Input() TrueOrFalse: boolean;
}
