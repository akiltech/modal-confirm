/**
 * Akil library modal constants
 *
 * @author Anzoumana SANOGO <dev.sanogo@gmail.com>
 * @version 0.0.11
 */

import { CONFIRMATION_TYPE } from './confirm-dialog';

/**
 * Confirm icon status
 */
export const ConfirmIconStatus: Map<string, string> = new Map<string, string>([
    [CONFIRMATION_TYPE.SUCCESS, 'done'],
    [CONFIRMATION_TYPE.WARNING, 'warning'],
    [CONFIRMATION_TYPE.DANGER, 'cancel'],
    [CONFIRMATION_TYPE.DEFAULT, 'info']
]);

/**
 * Confirm icon type
 */
export const ConfirmIconType: Map<string, string> = new Map<string, string>([
    [CONFIRMATION_TYPE.SUCCESS, 'text-success icon-section'],
    [CONFIRMATION_TYPE.WARNING, 'text-warning icon-section'],
    [CONFIRMATION_TYPE.DANGER, 'text-danger icon-section'],
    [CONFIRMATION_TYPE.DEFAULT, 'text-info icon-section']
]);

/**
 * Confirm btn status
 */
export const ConfirmBtnStatus: Map<string, string> = new Map<string, string>([
    [CONFIRMATION_TYPE.SUCCESS, 'btn btn-add-success ml-2 font-weight-bold akil-modal-btn'],
    [CONFIRMATION_TYPE.WARNING, 'btn btn-add-warning ml-2 font-weight-bold akil-modal-btn'],
    [CONFIRMATION_TYPE.DANGER, 'btn btn-add-danger ml-2 font-weight-bold akil-modal-btn'],
    [CONFIRMATION_TYPE.DEFAULT, 'btn btn-add-default ml-2 font-weight-bold akil-modal-btn']
]);

/**
 * Confirm outline btn status
 */
export const ConfirmOutlineBtnStatus: Map<string, string> = new Map<string, string>([
    [CONFIRMATION_TYPE.SUCCESS, 'btn btn-add-success-outline font-weight-bold akil-modal-outline-btn'],
    [CONFIRMATION_TYPE.WARNING, 'btn btn-add-warning-outline font-weight-bold akil-modal-outline-btn'],
    [CONFIRMATION_TYPE.DANGER, 'btn btn-add-danger-outline font-weight-bold akil-modal-outline-btn'],
    [CONFIRMATION_TYPE.DEFAULT, 'btn btn-add-default-outline font-weight-bold akil-modal-outline-btn']
]);

/**
 * Confirm header class
 */
export const ConfirmHeaderClass: Map<string, string> = new Map<string, string>([
    [CONFIRMATION_TYPE.SUCCESS, 'bg-success p-2 text-center card-header akil-modal-header-card'],
    [CONFIRMATION_TYPE.WARNING, 'bg-warning p-2 text-center card-header akil-modal-header-card'],
    [CONFIRMATION_TYPE.DANGER, 'bg-danger p-2 text-center card-header akil-modal-header-card'],
    [CONFIRMATION_TYPE.DEFAULT, 'bg-info p-2 text-center card-header akil-modal-header-card']
]);

/**
 * Confirm header title
 */
export const ConfirmHeaderTitle: Map<string, string> = new Map<string, string>([
    [CONFIRMATION_TYPE.SUCCESS, 'Alert sucess'],
    [CONFIRMATION_TYPE.WARNING, 'Alert warning'],
    [CONFIRMATION_TYPE.DANGER, 'Alert danger'],
    [CONFIRMATION_TYPE.DEFAULT, 'Alert infos']
]);
