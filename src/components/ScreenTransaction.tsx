import * as React from 'react';
import styled from 'styled-components';
import { ScreenEnum } from '../game/types';
import { Transition, TransitionGroup } from 'react-transition-group';

type Props = Readonly<{
  current: ScreenEnum;
  intro: JSX.Element;
  game: JSX.Element;
  over: JSX.Element;
}>;

const ANIM_DURATION_MS = 300;

const defaultStyle = {
  transition: `opacity ${ANIM_DURATION_MS}ms ease-in-out`,
  opacity: 0.5,
  fontSize: '3rem'
};

const transitionStyles: any = {
  // entering: { opacity: 1 },
  entered: { opacity: 1 }
  // exiting: { opacity: 0.5 },
  // exited: { opacity: 0.5 }
};

const Intro = ScreenEnum.Intro;
const Game = ScreenEnum.Game;
const Over = ScreenEnum.Over;

export function ScreenTransaction({ current, intro, game, over }: Props) {
  const screens = current === Intro ? [Intro] : current === Game ? [Game] : [Over];

  return (
    <TransitionGroup>
      {screens.map(x => (
        <Transition key={x} timeout={ANIM_DURATION_MS}>
          {state => (
            <div
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            >
              {x === Intro ? intro : x === Game ? game : over}
              {`${x} ${state}`}
            </div>
          )}
        </Transition>
      ))}
    </TransitionGroup>
  );
}

{
  /* <Transition in={true} timeout={ANIMATION_DURATIO_MS}>
        {state => (
          <Wrapper
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
            active={visibility[ScreenEnum.Intro]}
          >
            {intro}
          </Wrapper>
        )}
      </Transition>
      <Transition in={true} timeout={ANIMATION_DURATIO_MS}>
        {state => (
          <Wrapper
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
            active={visibility[ScreenEnum.Game]}
          >
            {game}
          </Wrapper>
        )}
      </Transition>
      <Transition in={true} timeout={ANIMATION_DURATIO_MS}>
        {state => (
          <Wrapper
            style={{
              ...defaultStyle,
              ...transitionStyles[state]
            }}
            active={visibility[ScreenEnum.Over]}
          >
            {over}
          </Wrapper>
        )}
      </Transition>
    </TransitionGroup> */
}
