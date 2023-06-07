import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGameTemplateComponent } from '@shared/components/templates/create-game-template/create-game-template.component';
import { SharedModule } from '@shared/shared.module';

describe('CreateGameTemplateComponent', () => {
  let component: CreateGameTemplateComponent;
  let fixture: ComponentFixture<CreateGameTemplateComponent>;
  let compiled: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      declarations: [CreateGameTemplateComponent]
    });
    fixture = TestBed.createComponent(CreateGameTemplateComponent);
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
