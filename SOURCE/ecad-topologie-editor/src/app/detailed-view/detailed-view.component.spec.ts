import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http'

import { DetailedViewComponent } from './detailed-view.component';

describe('DetailedViewComponent', () => {
  let component: DetailedViewComponent;
  let fixture: ComponentFixture<DetailedViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailedViewComponent, HttpClientModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
