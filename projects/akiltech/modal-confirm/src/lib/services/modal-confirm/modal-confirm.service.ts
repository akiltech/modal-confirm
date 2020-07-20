/**
 * Akil library modal service
 *
 * @author Anzoumana SANOGO <dev.sanogo@gmail.com>
 * License: MIT
 */

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { ConfirmInterface, ConfirmDialogClass, OptionsInterface } from '../../models/confirm-dialog';
import { ModalConfirmComponent } from '../../components/modal-confirm/modal-confirm.component';

@Injectable({
  providedIn: 'root'
})
export class ModalConfirmService {

  /**
   * Creates an instance of public confirm dialog service.
   * @param dialog [dialog]
   */
  constructor(private dialog: MatDialog) {}

  /**
   * Loads confirm dialog
   * @param value [Dialog incomming data]
   * @param dialogOptions [Dialog options]
   * @returns dialog
   */
  private loadConfirmDialog(value?: ConfirmInterface, dialogOptions?: OptionsInterface): Observable<any> {
    const dialogData: ConfirmDialogClass = new ConfirmDialogClass(value);

    const dialogRef = this.dialog.open(ModalConfirmComponent, {
      width: !!dialogOptions && !!dialogOptions.size ? `${dialogOptions.size}px` : '400px',
      maxWidth: '1000px',
      data: dialogData,
      disableClose: !!dialogOptions && !!dialogOptions.disabledClose ? dialogOptions.disabledClose : false
    });

    return dialogRef.afterClosed();
  }

  /**
   * Opens dialog
   * @param input [Dialog incomming data]
   * @param dialogOptions [Dialog options]
   * @returns dialog
   */
  public openDialog(input?: ConfirmInterface, dialogOptions?: OptionsInterface): Observable<any> {
    return this.loadConfirmDialog(input, dialogOptions);
  }

  /**
   * Closes dialog
   * @returns dialog
   */
  public closeAllDialog(): void {
    this.dialog.closeAll();
  }
}
