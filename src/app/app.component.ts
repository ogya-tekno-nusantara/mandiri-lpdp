import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { EventBusService } from './core/shared/event-bus.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, OnDestroy {
  
  eventBusSub?: Subscription;

  constructor(
    private eventBusService: EventBusService, 
    private router: Router,
  ) {}

  ngOnInit(): void {

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.onSignOutAction();
    });
  }

  ngOnDestroy(): void {
    if (this.eventBusSub)
      this.eventBusSub.unsubscribe();
  }

  onSignOutAction() {
    window.sessionStorage.clear(); //for dummy
    this.router.navigate(['/login']);
  }
}
