import { ComponentLoaderDirective } from './component-loader.directive';
import { ViewContainerRef } from '@angular/core';

describe('ComponentLoaderDirective', () => {
  it('should create an instance', () => {
    const viewContainerRef: ViewContainerRef = null;
    const directive = new ComponentLoaderDirective(viewContainerRef);
    expect(directive).toBeTruthy();
  });
});
