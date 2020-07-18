import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';
import { ModalConfirmComponent } from './modal-confirm.component';
import { ModalConfirmService } from '../../services/modal-confirm/modal-confirm.service';

describe('ModalConfirmComponent', () => {
  let component: ModalConfirmComponent;
  let fixture: ComponentFixture<ModalConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalConfirmComponent ],
      imports: [MatDialogModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        { provide: MatDialogRef, useValue: {} }
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
