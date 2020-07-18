/**
 * Akil library modal component
 *
 * @author Anzoumana SANOGO <dev.sanogo@gmail.com>
 * @version 0.0.1
 */

import {
  Component,
  OnInit,
  Inject,
  ViewEncapsulation,
  ComponentFactoryResolver,
  ViewChild,
  AfterViewChecked,
  ChangeDetectorRef,
  ComponentRef,
  OnDestroy,
  Type
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { ConfirmInterface, CONFIRMATION_TYPE, Utils } from '../../models/confirm-dialog';
import {
  ConfirmHeaderClass,
  ConfirmIconType,
  ConfirmIconStatus,
  ConfirmBtnStatus,
  ConfirmOutlineBtnStatus,
  ConfirmHeaderTitle
} from '../../models/constant';
import { ComponentLoaderDirective } from '../../directives/component-loader/component-loader.directive';

@Component({
  selector: 'lib-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalConfirmComponent implements OnInit, OnDestroy, AfterViewChecked {

  /**
   * View child of modal confirm component
   */
  @ViewChild(ComponentLoaderDirective, { static: true }) injectedComponent: ComponentLoaderDirective;

  /**
   * Type of public confirm dialog component
   */
  type: string;

  /**
   * Header title of modal confirm component
   */
  headerTitle: string;

  /**
   * Header shown of modal confirm component
   */
  headerShown: boolean;

  /**
   * Icon shown of modal confirm component
   */
  iconShown: boolean;

  /**
   * Footer shown of modal confirm component
   */
  footerShown: boolean;

  /**
   * Icon name of modal confirm component
   */
  iconName: string;

  /**
   * Btn yes of public confirm dialog component
   */
  btnYes: string;

  /**
   * Btn no of public confirm dialog component
   */
  btnNo: string;

  /**
   * Component ref of modal confirm component
   */
  componentRef: ComponentRef<any>;

  /**
   * Body text of modal confirm component
   */
  bodyText: string;

  /**
   * Child component type of modal confirm component
   */
  childComponent: Type<any>;

  /**
   * Creates an instance of public confirm dialog component.
   * @param dialogRef [dialogRef]
   * @param data [Input data]
   * @param componentFactoryResolver [Component factory resolver]
   * @param cd [Change detector override]
   */
  constructor(
    public dialogRef: MatDialogRef<ModalConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmInterface,
    private componentFactoryResolver: ComponentFactoryResolver,
    private cd: ChangeDetectorRef
  ) {
    this.type = data.type || CONFIRMATION_TYPE.DEFAULT;
    this.headerTitle = data.headerTitle;
    this.headerShown = data.headerShown;
    this.footerShown = data.footerShown;
    this.iconShown = data.iconShown;
    this.iconName = data.iconName;
    this.bodyText = data.bodyText || `Cette action est irreversible, voulez vous continuer ?`;
    this.childComponent = data.childComponent;
    this.btnYes = data.btnYes;
    this.btnNo = data.btnNo;
  }

  /**
   * On init lifecycle
   */
  ngOnInit() {
    if (this.childComponent) {
      this.loadChildComponent(this.childComponent);
    }
  }

  /**
   * After view checked lifecycle
   */
  ngAfterViewChecked(): void {
    this.cd.detectChanges();
  }

  /**
   * Determines whether confirm on
   *
   * @returns [void]
   */
  onConfirm(): void {
    this.dialogRef.close(true);
  }

  /**
   * Determines whether dismiss on
   *
   * @returns [void]
   */
  onDismiss(): void {
    this.dialogRef.close(false);
  }

  /**
   * Gets [Modal header style]
   *
   * @returns [string]
   */
  get getHeaderStyle(): string {
    return Utils._handleConfirmHelperFunction(this.type, ConfirmHeaderClass);
  }

  /**
   * Gets [Modal icon type]
   *
   * @returns [string]
   */
  get getIconType(): string {
    return Utils._handleConfirmHelperFunction(this.type, ConfirmIconType);
  }

  /**
   * Gets [Modal icon]
   *
   * @returns [string]
   */
  get getIcon(): string {
    return this.iconName ? this.iconName : Utils._handleConfirmHelperFunction(this.type, ConfirmIconStatus);
  }

  /**
   * Gets [Modal confirm btn class]
   *
   * @returns [string]
   */
  get getConfirmBtn(): string {
    return Utils._handleConfirmHelperFunction(this.type, ConfirmBtnStatus);
  }

  /**
   * Gets [Modal confirm outline btn class]
   *
   * @returns [string]
   */
  get getConfirmOutlineBtn(): string {
    return Utils._handleConfirmHelperFunction(this.type, ConfirmOutlineBtnStatus);
  }

  /**
   * Determines if modal icon must show or no
   *
   * @returns [boolean]
   */
  get onHideIcon(): boolean {
    return this.iconShown === null || this.iconShown === undefined ? true : this.iconShown;
  }

  /**
   * Determines if modal header must show or no
   *
   * @returns [boolean]
   */
  get onHideHeader(): boolean {
    return this.headerShown === null || this.headerShown === undefined ? true : this.headerShown;
  }

  /**
   * Determines if modal footer must show or no
   *
   * @returns [boolean]
   */
  get onHideFooter(): boolean {
    return this.footerShown === null || this.footerShown === undefined ? true : this.footerShown;
  }

  /**
   * Gets [Modal validate btn msg]
   *
   * @returns [string]
   */
  get getValidationMsg(): string {
    return this.btnYes ? this.btnYes : 'Validate';
  }

  /**
   * Gets [Modal cancel btn msg]
   *
   * @returns [string]
   */
  get getCancelMsg(): string {
    return this.btnNo ? this.btnNo : 'Cancel';
  }

  /**
   * Gets [Modal header title]
   *
   * @returns [string]
   */
  get getHeaderTitle(): string {
    return this.headerTitle ? this.headerTitle : Utils._handleConfirmHelperFunction(this.type, ConfirmHeaderTitle);
  }

  /**
   * Loads child component
   * @param component [Component child type]
   */
  private loadChildComponent(component: Type<any>): void {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);

    const viewContainerRef = this.injectedComponent.viewContainerRef;
    viewContainerRef.clear();

    this.componentRef = viewContainerRef.createComponent(componentFactory);
  }

  /**
   * On destroy lifecycle
   */
  ngOnDestroy(): void {
    if (this.componentRef) {
      this.componentRef.destroy();
    }
  }
}
