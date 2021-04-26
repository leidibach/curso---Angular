import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDoisComponent } from './pagina-dois.component';

describe('PaginaDoisComponent', () => {
  let component: PaginaDoisComponent;
  let fixture: ComponentFixture<PaginaDoisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaDoisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaDoisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
