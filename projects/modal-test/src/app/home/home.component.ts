import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalConfirmService, ConfirmInterface, CONFIRMATION_TYPE, OptionsInterface } from '@akiltech/modal-confirm';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { InjectedComponent } from '../injected/injected.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject();

  constructor(private confirmService: ModalConfirmService) {}

  ngOnInit(): void {}
 
  openDialog () {
    const dialogData: ConfirmInterface = {
      type: CONFIRMATION_TYPE.SUCCESS,
      headerShown: false,
      iconShown: false,
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
      this.confirmService.openDialog(dialogData, dialogOptions).pipe(takeUntil(this.unsubscribe$)).subscribe(dialog => {
        if (dialog) {
          console.log('Do something here');
        } else {
          console.log('Do something here');
        }
      })
  }

  /**
   * Lifecycle
   */
  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
