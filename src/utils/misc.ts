import { IO, io } from 'fp-ts/lib/IO';
import { randomInt } from 'fp-ts/lib/Random';

/**
 * Get a random value from a generic Enum
 * @param strEnum Enum of type string
 */
export const getRandomValueFromStringEnum = <T>(strEnum: T): IO<T[keyof T]> => {
  const rndInt = randomInt(0, Object.keys(strEnum).length - 1)();
  const rndValue = Object.keys(strEnum)[rndInt] as keyof T;
  return io.of(strEnum[rndValue]);
};

/**
 * Empty callback.
 */
export const noop = (): void => undefined;
