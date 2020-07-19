/**
 * Dynamic component loader directive
 *
 * @author Anzoumana SANOGO <dev.sanogo@gmail.com>
 * @version 0.0.10
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
