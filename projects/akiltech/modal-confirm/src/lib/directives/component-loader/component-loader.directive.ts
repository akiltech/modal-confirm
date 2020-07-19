/**
 * Dynamic component loader directive
 *
 * @author Anzoumana SANOGO <dev.sanogo@gmail.com>
 * License: MIT
 */

import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[libComponentLoader]',
})
export class ComponentLoaderDirective {

  /**
   * Creates an instance of component loader directive.
   * @param viewContainerRef [View container ref]
   */
  constructor(public viewContainerRef: ViewContainerRef) { }
}
