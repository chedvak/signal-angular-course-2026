import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorBoxList } from './color-box-list';

describe('ColorBoxList', () => {
  let component: ColorBoxList;
  let fixture: ComponentFixture<ColorBoxList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorBoxList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorBoxList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
