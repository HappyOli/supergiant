import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VolumeComponent } from './volume.component';

describe('VolumeComponent', () => {
  let component: VolumeComponent;
  let fixture: ComponentFixture<VolumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolumeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
