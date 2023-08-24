import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArturoComponent } from './arturo.component';

describe('ArturoComponent', () => {
  let component: ArturoComponent;
  let fixture: ComponentFixture<ArturoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArturoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArturoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
