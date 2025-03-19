import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.js-accordion', {
  elementClass: 'js-accordion-item',
  triggerClass: 'js-accordion-trigger',
  panelClass: 'js-accordion-body',
  activeClass: 'active',
  collapse: false,
  openOnInit: [0],
});
