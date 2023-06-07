import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription, throttleTime } from 'rxjs';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit, OnDestroy {

  @Input()
  public text: string = "text";

  @Input()
  public buttonDisabled: boolean = false;

  @Input()
  public throttleTime = 500;

  @Output()
  public actionButtonClick: EventEmitter<MouseEvent> = new EventEmitter();
  private clicks = new Subject();
  private subscription?: Subscription;

  ngOnInit() {
    this.subscription = this.clicks.pipe(
      throttleTime(this.throttleTime)
    ).subscribe(e => this.emitThrottledClick(e as any));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  emitThrottledClick(e: MouseEvent) {
    this.actionButtonClick.emit(e);
  }

  clickEvent(event: MouseEvent) {
    this.clicks.next(event);
  }

}
