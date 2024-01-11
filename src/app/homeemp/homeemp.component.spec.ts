import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeempComponent } from './homeemp.component';

describe('HomeempComponent', () => {
  let component: HomeempComponent;
  let fixture: ComponentFixture<HomeempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeempComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
