import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Homedetail5Page } from './homedetail5.page';

describe('Homedetail5Page', () => {
  let component: Homedetail5Page;
  let fixture: ComponentFixture<Homedetail5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homedetail5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Homedetail5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
