import { CaloriesCounter } from '../src/CaloriesCounter';

describe('CaloriesCounter tests', () => {

  const exampleElvesItemsCalories = `
  1000
  2000
  3000
  
  4000
  
  5000
  6000
  
  7000
  8000
  9000
  
  10000
  `


  it('should return the number of calories carried by the Elf carrying the most calories', () => {
    const caloriesCounter = new CaloriesCounter(exampleElvesItemsCalories);
    expect(caloriesCounter.countCalories()).toBe(24000);
  });

});