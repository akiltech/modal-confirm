import { Component, OnInit } from '@angular/core';
import { ModalConfirmService, CONFIRMATION_TYPE, ConfirmInterface, OptionsInterface } from '@akiltech/modal-confirm';
import { InjectedComponent } from './injected/injected.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private confirmService: ModalConfirmService) {}

  ngOnInit(): void {}
 
  openDialog () {
    const dialogData: ConfirmInterface = {
      type: CONFIRMATION_TYPE.DANGER,
      // headerShown: false,
      // iconShown: false,
      footerShown: false,
      headerTitle: 'Header title',
      // iconName: 'zoom_out',
      bodyText: 'Body content',
      childComponent: InjectedComponent,
      btnYes: 'Oui',
      btnNo: 'Non'
    };
 
    const dialogOptions: OptionsInterface = {
        // size: '800',
        disabledClose: true
    } 
      this.confirmService.openDialog(dialogData, dialogOptions).subscribe(dialog => {
        if (dialog) {
          console.log('Do something here');
        } else {
          console.log('Do something here');
        }
      })
  }
  
}
