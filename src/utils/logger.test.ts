import { logger } from './logger';
import { pieces } from '~game';
import { TetroEnum, DirectionEnum } from '~game/types';
import { spy } from 'sinon';

describe('logger', () => {
  it('should log in console', () => {
    const consoleLogStub = spy(console, 'log');
    logger(pieces[TetroEnum.I][DirectionEnum.N]);

    expect(consoleLogStub.calledOnce).toBe(true);
    expect(consoleLogStub.getCall(0).args[0]).toHaveLength(16);

    consoleLogStub.restore();
  });
});
