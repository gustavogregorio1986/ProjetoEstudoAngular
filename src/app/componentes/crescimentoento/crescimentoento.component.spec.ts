import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrescimentoentoComponent } from './crescimentoento.component';

describe('CrescimentoentoComponent', () => {
  let component: CrescimentoentoComponent;
  let fixture: ComponentFixture<CrescimentoentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrescimentoentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrescimentoentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
