import { GameValidator } from '../../../src/2023/day-2/DocumentCalibrator';
import { part1ExampleInput } from '../fixtures/Day2Input';

describe('GameValidator', () => {
  const gameValidator = new GameValidator();

  it('should return 8 as the total sum of possible games', () => {
    gameValidator.initialSetup({
      gamesString: part1ExampleInput,
      cubeSetup: {
        red: 12,
        green: 13,
        blue: 14,
      },
    });

    expect(gameValidator.addPossibleGames()).toBe(8);
  });
});
