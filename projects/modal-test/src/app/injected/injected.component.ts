import { Component, OnInit, Input } from '@angular/core';
import { ModalConfirmService } from '@akiltech/modal-confirm';

@Component({
  selector: 'app-injected',
  templateUrl: './injected.component.html',
  styleUrls: ['./injected.component.scss']
})
export class InjectedComponent implements OnInit {

  @Input() data: any;

  constructor(private dialogService: ModalConfirmService) { }

  ngOnInit() {
    console.log('[Incoming data] ', this.data);
  }

  closeDialog() {
    this.dialogService.closeAllDialog();
  }
}
