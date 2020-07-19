/**
 * Akil library modal types [enum, class, interfaces]
 *
 * @author Anzoumana SANOGO <dev.sanogo@gmail.com>
 * @version 0.0.12
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

/**
 * Confirm dialog class
 */
export class ConfirmDialogClass {
    constructor(data: ConfirmInterface) {
        Object.assign(this, data);
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
