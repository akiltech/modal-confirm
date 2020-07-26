# Modal Confirm

Handle your modal dialog as you want without having to configure anything.

## Installation

#### NPM
```sh
$ npm install @akiltech/modal-confirm --save
```

#### YARN
```sh
$ yarn add @akiltech/modal-confirm
```

you must install these two libraries for the application to work properly `@angular/material@8.x` and `bootstrap@4.x`

#### @angular/material (must be lower than version 9)
```sh
$ ng add @angular/material@8.x
```

##### Notice for `@angular/material` set up

So that library work properly, you must install a version lower than version 9. for example `ng add @angular/material@^8.2.3`

#### BOOTSTRAP
```sh
$ npm install bootstrap
```

OR

```sh
$ yarn add bootstrap
```

## Configuration

```typescript
import { ModalConfirmModule } from '@akiltech/modal-confirm';

@NgModule({
  declarations: [],
  imports: [ModalConfirmModule],
  providers: [],
  bootstrap: []
})
export class AppModule { }
```

copy and paste these code in your `styles.scss`

```scss
// Bootstrap
@import "~bootstrap/scss/bootstrap";
```

### Available Parameters

You can pass two parameters to customize your modal dialog. the first parameter must be of type `ConfirmInterface` and 
the second parameter must be of type `OptionsInterface`

### Parameters structure

```typescript
import { ConfirmInterface, OptionsInterface} from '@akiltech/modal-confirm';

export class AppComponent {

  const dialogData: ConfirmInterface {
      // here dialog data parameters...
  }

  const dialogOptions: OptionsInterface {
      // here options parameters...
  }
}
```

### Available Methods

There are several methods to facilitate the use of a service, you should know that some methods returns an `observable`.

#### OPENDIALOG

The `openDialog` method allows you to open your modal dialog and you can pass or no parameters if you want.

##### First Parameter (Dialog datas)

| Parameter(s) | Type | Required | Description |
|--------------|----------|------|--------------|
| `type` | `String` | none | Define a modal dialog type (SUCCESS, DANGER, WARNING, DEFAULT) |
| `headerTitle` | `String` | none | Define a modal dialog header title |
| `headerShown` | `Boolean` | none | Define if header modal dialog must show |
| `footerShown` | `Boolean` | none | Define if modal dialog footer must show |
| `iconShown` | `Boolean` | none | Define if modal dialog icon must show |
| `iconName` | `String` | none | Define a modal dialog icon name if you don't want default icon |
| `bodyText` | `String` | none | Define a modal dialog body text |
| `childComponent` | `Component` | none | You can decide to inject component in you modal dialog |
| `btnYes` | `String` | none | Define a text for your modal dialog confirm button |
| `btnNo` | `String` | none | Define a text for your modal dialog cancel button |

##### Second Parameter (Options datas)

| Parameter(s) | Type | Required | Description |
|--------------|----------|------|--------------|
| `size` | `String` | none | Define a size for your modal dialog type |
| `disabledClose` | `String` | none | You can disable close for you modal dialog |


#### CLOSEDIALOG

The `closeAllDialog` method allows you to close your modal dialog.

| Parameter(s) | Type |
|--------------|----------|
| No parameters | `Void` |

## How to use

### Basic use

```typescript
import { ModalConfirmService } from '@akiltech/modal-confirm';

export class AppComponent {

  constructor(private confirmService: ModalConfirmService) {}

  openDialog () {
      this.confirmService.openDialog().subscribe(dialog => {
        if (dialog) {
          console.log('Do something here');
        } else {
          console.log('Do something here');
        }
      })
  }
}
```

### Advanced use

```typescript
import { CONFIRMATION_TYPE, ConfirmInterface, ModalConfirmService, OptionsInterface } from '@akiltech/modal-confirm';

export class AppComponent {

  constructor(private confirmService: ModalConfirmService) {}

  const dialogData: ConfirmInterface = {
      type: CONFIRMATION_TYPE.DANGER, // Modal confirm type
      headerShown: false, // if you don't want to show header
      iconShown: false, // if you don't want to show dialog icon
      footerShown: false, // if you don't want to show footer
      headerTitle: 'Your header title',
      iconName: 'your icon name', // if you don't want to use default icon
      bodyText: 'Here body text',
      childComponent: YourComponent, // if you want to inject component
      btnYes: 'Confirm btn label',
      btnNo: 'Cancel btn label'
  };

  const dialogOptions: OptionsInterface = {
      size: '800', // Modal dialog size
      disabledClose: true // you can disable or no dialog closure
  } 

  openDialog () {
      this.confirmService.openDialog(dialogData, dialogOptions).subscribe(dialog => {
        if (dialog) {
          console.log('Do something here');
        } else {
          console.log('Do something here');
        }
      })
  }
}
```

### Notice

- If you want to inject component to your modal dialog, you must add it to entryComponents 

```typescript
import { ModalConfirmModule } from '@akiltech/modal-confirm';

@NgModule({
  declarations: [],
  imports: [ModalConfirmModule],
  providers: [],
  entryComponents: [YourComponent],
  bootstrap: [],
})
export class AppModule { }
```

- If you decide to inject component, you can't use `bodyText` parameter again.

### Screenshot

- Success modal dialog

![Success modal dialog](https://github.com/devsanogo/modal-confirm/blob/master/projects/modal-test/src/assets/screenshots/Success-dialog.png)

- Danger Modal dialog

![Danger modal dialog](https://github.com/devsanogo/modal-confirm/blob/master/projects/modal-test/src/assets/screenshots/Danger-dialog.png)

- Warning modal dialog

![Warning modal dialog](https://github.com/devsanogo/modal-confirm/blob/master/projects/modal-test/src/assets/screenshots/Warning-dialog.png)

- Default modal dialog

![Default modal dialog](https://github.com/devsanogo/modal-confirm/blob/master/projects/modal-test/src/assets/screenshots/Default-dialog.png)

- Modal dialog with injected component

![Modal dialog with component](https://github.com/devsanogo/modal-confirm/blob/master/projects/modal-test/src/assets/screenshots/Dialog-with-component.png)
