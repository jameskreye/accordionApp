import { AccordionHeader } from './directives/accordion-header.directive';
import { AccordionTitle } from './directives/accordion-title.directive';
import { AccordionContent } from './directives/accordion-content.directive';
import { AccordionItem } from './directives/accordion-item.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccordionComponent } from './accordion.component';



@NgModule({
  declarations: [
    AccordionComponent,
    AccordionItem,
    AccordionContent,
    AccordionTitle,
    AccordionHeader
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccordionComponent,
    AccordionItem,
    AccordionContent,
    AccordionTitle,
    AccordionHeader
  ]
})
export class AccordionModule { }
