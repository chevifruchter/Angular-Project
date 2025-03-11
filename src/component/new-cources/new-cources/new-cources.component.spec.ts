import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourcesComponent } from './new-cources.component';

describe('NewCourcesComponent', () => {
  let component: NewCourcesComponent;
  let fixture: ComponentFixture<NewCourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCourcesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewCourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
