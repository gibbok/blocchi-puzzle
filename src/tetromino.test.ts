import { TetroEnum, Orientation } from "./types";
import { x } from "./tetromino";

describe('tetromino', () => {
  describe('factoryTetro', () => {
    test('x',()=> expect(x()).toEqual(10))
  })
})
