import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';
import { Sort } from '../util/sort';

@Directive({
  selector: '[appSort]'
})
export class SortDirective {

  @Input() appSort: Array<any>;
  constructor(private renderer: Renderer2, private targetElem: ElementRef) { }

  @HostListener("click")
  sortData() {
    // Create object of Sort class
    const sort = new Sort();

    // Get reference of current clicked element
    const elem = this.targetElem.nativeElement;

    // Get which order
    const order = elem.getAttribute("data-order");

    // Get property name from element attribute
    const property = elem.getAttribute("data-name");

    if (order === "desc") {
      this.appSort.sort(sort.startSort(property, order));
      elem.setAttribute("data-order", "asc");
    } else {
      this.appSort.sort(sort.startSort(property, order));
      elem.setAttribute("data-order", "desc");
    }
  }

}
