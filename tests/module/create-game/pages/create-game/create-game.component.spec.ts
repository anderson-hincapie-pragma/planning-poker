import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGameComponent } from '@module/create-game/pages/create-game/create-game.component';
import { SharedModule } from '@shared/shared.module';

describe('CreateGameComponent', () => {
  let component: CreateGameComponent;
  let fixture: ComponentFixture<CreateGameComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [CreateGameComponent]
    });
    fixture = TestBed.createComponent(CreateGameComponent);
    compiled = fixture.nativeElement;
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(compiled).toMatchSnapshot();
  })

});
