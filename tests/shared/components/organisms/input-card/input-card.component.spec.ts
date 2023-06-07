import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputCardComponent } from '@shared/components/organisms/input-card/input-card.component';
import { SharedModule } from '@shared/shared.module';

describe('InputCardComponent', () => {
  let component: InputCardComponent;
  let fixture: ComponentFixture<InputCardComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [InputCardComponent]
    });
    fixture = TestBed.createComponent(InputCardComponent);
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
