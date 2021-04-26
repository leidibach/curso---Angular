import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaTresComponent } from './pagina-tres.component';

describe('PaginaTresComponent', () => {
  let component: PaginaTresComponent;
  let fixture: ComponentFixture<PaginaTresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaTresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
