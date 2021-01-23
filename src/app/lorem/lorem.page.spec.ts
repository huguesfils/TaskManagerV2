import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoremPage } from './lorem.page';

describe('LoremPage', () => {
  let component: LoremPage;
  let fixture: ComponentFixture<LoremPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoremPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoremPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
