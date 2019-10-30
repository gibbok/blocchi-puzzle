export const calcScore = (rowCompleted: number) => rowCompleted * 100;

export const calcLevel = (score: number) => Math.ceil((score + 1) / 1000);
