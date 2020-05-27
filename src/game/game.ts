export const calcScore = (rowCompleted: number): number => rowCompleted * 100;

export const calcLevel = (score: number): number => Math.ceil((score + 1) / 500);
