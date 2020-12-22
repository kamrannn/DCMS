import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Homedetail4Page } from './homedetail4.page';

describe('Homedetail4Page', () => {
  let component: Homedetail4Page;
  let fixture: ComponentFixture<Homedetail4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Homedetail4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Homedetail4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
