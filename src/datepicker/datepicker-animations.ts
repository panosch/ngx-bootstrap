import {
  animate,
  style,
  AnimationMetadata,
  AnimationTriggerMetadata,
  state,
  transition,
  trigger
} from '@angular/animations';

export const DATEPICKER_ANIMATION_TIMING = '400ms cubic-bezier(0.4,0.0,0.2,1)';

export const expandAnimation: AnimationMetadata[] = [
  style({ height: 0, visibility: 'hidden', overflow: 'hidden' }),
  animate(DATEPICKER_ANIMATION_TIMING, style({ height: '*', visibility: 'visible' }))
];

export const collapseAnimation: AnimationMetadata[] = [
  style({ height: '*', visibility: 'visible', overflow: 'hidden' }),
  animate(DATEPICKER_ANIMATION_TIMING, style({ height: 0, visibility: 'hidden' }))
];

export const datepickerAnimation: AnimationTriggerMetadata =
  trigger('datepickerAnimation', [
    state('false, void', style({height: '0px', visibility: 'hidden'})),
    state('true', style({height: '*', visibility: 'visible'})),
    transition('true <=> false, void => false',
      animate(DATEPICKER_ANIMATION_TIMING))
  ]);
