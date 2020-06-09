import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger,
  group,
  animateChild
} from '@angular/animations';

export let listAnimation = trigger('listAnimation', [
  transition('* => *', [
    query(':enter', style({ opacity: 0 }), { optional: true }),
    query(
      ':enter',
      stagger('300ms', [
        animate(
          '1s ease-in',
          keyframes([
            style({ opacity: 0, transform: 'translateY(-75px)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateY(35px)', offset: 0.3 }),
            style({ opacity: 1, transform: 'translateY(0px)', offset: 1 })
          ])
        )
      ]),
      { optional: true }
    )
  ])
]);

export let routeAnimation = trigger('routeAnimation', [
  transition('* => *, :enter', [
    query(':enter, :leave', style({ position: 'absolute', width: '100%' }), {
      optional: true
    }),
    query(':enter', style({ transform: 'translateX(-100vw)' }), {
      optional: true
    }),
    query(':leave', style({ transform: 'translateX(0vw)' }), {
      optional: true
    }),

    group([
      query(
        ':leave',
        [
          animate(
            '500ms ease-in-out',
            style({
              transform: 'translateX(100vw)'
            })
          )
        ],
        { optional: true }
      ),
      query(
        ':enter',
        [
          animate(
            '500ms ease-in-out',
            style({
              transform: 'translateX(0)'
            })
          )
        ],
        { optional: true }
      )
    ])
  ])
]);
