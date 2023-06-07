import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInputComponent } from '@shared/components/molecules/form-input/form-input.component';
import { SharedModule } from '@shared/shared.module';

describe('FormInputComponent', () => {
  let component: FormInputComponent;
  let fixture: ComponentFixture<FormInputComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [FormInputComponent]
    });
    fixture = TestBed.createComponent(FormInputComponent);
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

});
