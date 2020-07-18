import { TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material';

import { ModalConfirmService } from './modal-confirm.service';
import { ModalConfirmComponent } from '../../components/modal-confirm/modal-confirm.component';

describe('ModalConfirmService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [ModalConfirmComponent],
    imports: [MatDialogModule]
  }));

  it('should be created', () => {
    const service: ModalConfirmService = TestBed.get(ModalConfirmService);
    expect(service).toBeTruthy();
  });
});
