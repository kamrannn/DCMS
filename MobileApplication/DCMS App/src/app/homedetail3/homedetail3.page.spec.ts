import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Homedetail3Page } from './homedetail3.page';

describe('Homedetail3Page', () => {
  let component: Homedetail3Page;
  let fixture: ComponentFixture<Homedetail3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homedetail3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Homedetail3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
