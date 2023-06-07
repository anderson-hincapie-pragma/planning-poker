import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonComponent } from '@shared/components/atoms/action-button/action-button.component';
import { DebugElement } from '@angular/core';

describe('ActionButtonComponent', () => {
  let component: ActionButtonComponent;
  let fixture: ComponentFixture<ActionButtonComponent>;
  let compiled: HTMLElement;
  let debugElement: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionButtonComponent]
    });
    fixture = TestBed.createComponent(ActionButtonComponent);
    debugElement = fixture.debugElement;
    compiled = fixture.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('shoud match snapshot', () => {
    expect(compiled).toMatchSnapshot();
  });

  it('should show default title', () => {
    let button = compiled.querySelector('[data-testid="action-button"]');
    expect(button?.textContent).toEqual(component.text);
  });

  it('should fire clickEvent on click', async () => {
    await fixture.whenStable();
    jest.spyOn(component, 'emitThrottledClick');
    jest.spyOn(component, 'clickEvent');
    let button = compiled.querySelector('[data-testid="action-button"]') as HTMLButtonElement;
    button.click();
    expect(component.clickEvent).toHaveBeenCalledTimes(1);
    expect(component.emitThrottledClick).toHaveBeenCalledTimes(1);
  });

  it('should throttle multiple clicks depending of throttleTime', async () => {
    await fixture.whenStable();
    jest.spyOn(component, 'emitThrottledClick');
    jest.spyOn(component, 'clickEvent');
    let button = compiled.querySelector('[data-testid="action-button"]') as HTMLButtonElement;
    button.click();
    expect(component.clickEvent).toHaveBeenCalledTimes(1);
    expect(component.emitThrottledClick).toHaveBeenCalledTimes(1);
    await new Promise<void>((resolve, reject) => setTimeout(() => resolve(), (component.throttleTime / 3) * 1));
    button.click();
    expect(component.clickEvent).toHaveBeenCalledTimes(2);
    expect(component.emitThrottledClick).toHaveBeenCalledTimes(1);
    await new Promise<void>((resolve, reject) => setTimeout(() => resolve(), (component.throttleTime / 3) * 1));
    button.click();
    expect(component.clickEvent).toHaveBeenCalledTimes(3);
    expect(component.emitThrottledClick).toHaveBeenCalledTimes(1);
    await new Promise<void>((resolve, reject) => setTimeout(() => resolve(), (component.throttleTime / 3) * 1));
    button.click();
    expect(component.clickEvent).toHaveBeenCalledTimes(4);
    expect(component.emitThrottledClick).toHaveBeenCalledTimes(2);
  });

});
