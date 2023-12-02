import { CaloriesCounter } from '../../../src/2022/day-1/CaloriesCounter';
import { exampleElvesItemsCalories, problemElvesItemsCalories } from '../fixtures/Day1ProblemElvesItemCalories';

describe('CaloriesCounter tests', () => {
  const exampleCaloriesCounter = new CaloriesCounter(exampleElvesItemsCalories);
  const problemCaloriesCounter = new CaloriesCounter(problemElvesItemsCalories);

  it('should return 24000 as a top one calories count from example elves list', () => {
    expect(exampleCaloriesCounter.getTopOneCaloriesCount()).toBe(24000);
  });

  it('should return 70369 as a top one calories count from the problem elves list', () => {
    expect(problemCaloriesCounter.getTopOneCaloriesCount()).toBe(70369);
  });

  it('should return 45000 as a top three calories count from example elves list', () => {
    expect(exampleCaloriesCounter.getTopThreeCaloriesCount()).toBe(45000);
  });

  it('should return 203002 as a top three calories count from example elves list', () => {
    expect(problemCaloriesCounter.getTopThreeCaloriesCount()).toBe(203002);
  });
});
