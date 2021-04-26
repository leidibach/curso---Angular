import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaOneComponent } from './pagina-one.component';


describe('PaginaOneComponent', () => {
  let component: PaginaOneComponent;
  let fixture: ComponentFixture<PaginaOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
