import * as React from 'react';
import { ScreenEnum, TransitionState, TransitionStyles } from '../game/types';
import { Transition, TransitionGroup } from 'react-transition-group';

type Props = Readonly<{
  current: ScreenEnum;
  intro: JSX.Element;
  game: JSX.Element;
  over: JSX.Element;
}>;

const ANIM_DURATION_MS = 750;

const defaultStyle: React.CSSProperties = {
  position: 'absolute',
  transition: `opacity ${ANIM_DURATION_MS}ms ease-in-out`,
  opacity: 0,
  fontSize: '3rem',
  width: '100%',
  height: '100%',
};

const transitionStyles: TransitionStyles = {
  entered: { opacity: 1 },
};

const Intro = ScreenEnum.Intro;
const Game = ScreenEnum.Game;
const Over = ScreenEnum.Over;

export function ScreenTransaction({ current, intro, game, over }: Props): JSX.Element {
  const screens = current === Intro ? [Intro] : current === Game ? [Game] : [Over];

  return (
    <TransitionGroup component={null}>
      {screens.map((x) => (
        <Transition key={x} timeout={ANIM_DURATION_MS}>
          {(state: TransitionState) => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              {x === Intro ? intro : x === Game ? game : over}
            </div>
          )}
        </Transition>
      ))}
    </TransitionGroup>
  );
}
