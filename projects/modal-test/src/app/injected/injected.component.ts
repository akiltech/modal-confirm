import { Component, OnInit } from '@angular/core';
import { ModalConfirmService } from '@akiltech/modal-confirm';

@Component({
  selector: 'app-injected',
  templateUrl: './injected.component.html',
  styleUrls: ['./injected.component.scss']
})
export class InjectedComponent implements OnInit {

  constructor(private dialogService: ModalConfirmService) { }

  ngOnInit() {
  }

  closeDialog() {
    this.dialogService.closeAllDialog();
  }

}
