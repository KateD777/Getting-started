import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { Logger } from './app/logger.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: `/src/app/app.component.html`,
})
export class App {
  count = 0;

    constructor(private logger: Logger) {}

  onLogMe() {
    this.logger.writeCount(this.count);
    this.count++;
  }
}

bootstrapApplication(App);
