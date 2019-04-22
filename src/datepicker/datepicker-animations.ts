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

export const fadeOutAnimation: AnimationTriggerMetadata =
  trigger('fadeOutAnimation', [
    state('true' , style({ opacity: 0 })),
    state('false' , style({ opacity: 0.5 })),
    transition('false => true', animate('1s')),
    transition('true => false', animate('0s'))
  ]);
