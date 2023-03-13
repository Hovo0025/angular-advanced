import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHideAfter]',
})
export class HideAfterDirective implements OnInit {
  @Input('appHideAfter') delay = 0;
  @Input('appHideAfterThen') placeholder: TemplateRef<any> | null = null;
  constructor(private readonly viewContainerRef: ViewContainerRef, private readonly templateRef: TemplateRef<any>) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.viewContainerRef.clear();
      if (this.placeholder) {
        this.viewContainerRef.createEmbeddedView(this.placeholder);
      }
    }, this.delay);
    this.viewContainerRef.createEmbeddedView(this.templateRef);
  }
}
