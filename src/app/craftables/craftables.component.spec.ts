import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CraftablesComponent } from './craftables.component';

describe('CraftablesComponent', () => {
  let component: CraftablesComponent;
  let fixture: ComponentFixture<CraftablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CraftablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CraftablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
