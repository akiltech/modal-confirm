/**
 * Akil library modules
 *
 * @author Anzoumana SANOGO <dev.sanogo@gmail.com>
 * @version 0.0.1
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';
import { ComponentLoaderDirective } from './directives/component-loader/component-loader.directive';
import { ModalConfirmComponent } from './components/modal-confirm/modal-confirm.component';

@NgModule({
  declarations: [ModalConfirmComponent, ComponentLoaderDirective],
  imports: [CommonModule, MatDialogModule],
  exports: [ModalConfirmComponent],
  entryComponents: [ModalConfirmComponent]
})
export class ModalConfirmModule { }
