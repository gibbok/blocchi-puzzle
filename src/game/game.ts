/**
 * Calculate the game score.
 * @param rowCompleted Number of rows completed
 */
export const calcScore = (rowCompleted: number): number => rowCompleted * 100;

/**
 * Calculate the game level.
 * @param score Game score
 */
export const calcLevel = (score: number): number => Math.ceil((score + 1) / 500);
