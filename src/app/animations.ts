import {
  animate,
  animation,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';

export const fadeIn = animation([
  style({ opacity: 0 }), // initial state
  animate('{{duration}} {{delay}} ease-in', style({ opacity: 1 })),
]);

export const fadeOut = animation([
  animate('{{duration}} {{delay}} ease-out', style({ opacity: 0 })),
]);

export const fadeAnimation = trigger('fadeAnimation', [
  transition(
    ':enter',
    useAnimation(fadeIn, {
      params: { duration: '300ms', delay: '0ms' },
    })
  ),
  transition(
    ':leave',
    useAnimation(fadeOut, {
      params: { duration: '300ms', delay: '0ms' },
    })
  ),
]);
