/**
 * Dynamic component loader directive
 *
 * @author Anzoumana SANOGO <dev.sanogo@gmail.com>
 * @version 0.0.1
 */

import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[libComponentLoader]',
})
export class ComponentLoaderDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}
