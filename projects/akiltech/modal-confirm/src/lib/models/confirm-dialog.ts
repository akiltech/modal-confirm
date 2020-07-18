/**
 * Akil library modal types [enum, class, interfaces]
 *
 * @author Anzoumana SANOGO <dev.sanogo@gmail.com>
 * @version 0.0.1
 */

import { Type } from '@angular/core';

/**
 * Public confirmation enum type
 */
export enum CONFIRMATION_TYPE {
    WARNING = 'warning',
    SUCCESS = 'success',
    DANGER = 'danger',
    DEFAULT = 'default'
}

/**
 * Public confirm interface
 */
export interface ConfirmInterface {
    type?: string;
    headerTitle?: string;
    headerShown?: boolean;
    footerShown?: boolean;
    iconShown?: boolean;
    iconName?: string;
    bodyText?: string;
    childComponent?: Type<any>;
    btnYes?: string;
    btnNo?: string;
}

// @dynamic
export class ConfirmDialogClass {
    private static instance: ConfirmDialogClass;
    constructor(data: ConfirmInterface) {
        Object.assign(this, data);
    }

    static getInstance(input: ConfirmInterface): ConfirmDialogClass {
        return this.instance || (this.instance = new this(input));
    }
}

/**
 * Confirm dialog options interface
 */
export interface OptionsInterface {
    size?: string;
    disabledClose?: boolean;
}

/**
 * Utils class helpers
 */
export class Utils {

  /**
   * Handle confirm helper function
   *
   * @param type [Modal type]
   * @param MapConfirmType [Modal constant type]
   * @returns string
   */
  static _handleConfirmHelperFunction(type?: string, MapConfirmType?: Map<string, string>): string {
    let statusClass;
    for (const k of MapConfirmType.keys()) {
        if (type === k) {
            statusClass = MapConfirmType.get(k);
            break;
        }
    }
    return statusClass;
  }
}
