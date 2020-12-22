import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Homedetail2Page } from './homedetail2.page';

describe('Homedetail2Page', () => {
  let component: Homedetail2Page;
  let fixture: ComponentFixture<Homedetail2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homedetail2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Homedetail2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
