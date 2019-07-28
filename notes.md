# Developer's notes

## Game board
- Has 10 columns and 20 rows
- Has two walls on the sides
- Square/Tile is created from top/left corner
- A tile can be vacant/empty 0 or occupied 1
- A tile has a color

## Tetromino
- Can rotate clockwise or anti-clockwise
- 5 pieces are based on 3x3 (Z/S/J/T)
- 2 pieces are based on 4x4 (I/O)
- Rotation point is in the center
- Patterns for the rotation are defined in array of array
- We need to track the current tetromino (user's active one)
- Has color and patterns (for rotation)
- Are positioned with x and y
- Pieces are dropped every 1 second in a random fashion

## Collision detection
- Before any movement of a piece/tetromino, we have to check if that movement won't lead to collision
  in case there will be a collision do not move otherwise move
  It need to know the future coordinations and the piece
- It must consider future vacant tiles, walls, locked tiles
- It must run also after any rotation
- During rotation the next pattern for the tetromino must be considered

## Rotation
- Rotation of the tetrominio is done in place, no movement is allowed during a rotation
- The coordinates of the piece after rotation remains the same (in place rotation)
- Wall kick allows to rotate a piece which has a side attached to the wall
- Kick it is always performed before the actual rotation

## Locking piece on board
- Means changing the color of the tile in the board
- It can detect a game over when the piece goes outside the board
- Removing a full row is done by checking for vacant tiles in the board 
- After the row removal, the board has to shift of one down


