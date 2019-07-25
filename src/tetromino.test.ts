import { factoryTetro } from "./tetromino";
import { Z, Orientation } from "./types";

describe('tetromino', () => {
  describe('factoryTetro', () => {
    it('should return tetro: position: 0/0, type: Z, orientation: N', () => expect(factoryTetro({ x: 0, y: 0 })(Z)(Orientation.N)).toEqual({ "position": { "x": 0, "y": 0 }, "tetromino": [["Z", "Z", 0], [0, "Z", "Z"], [0, 0, 0]] }))
  })
})
