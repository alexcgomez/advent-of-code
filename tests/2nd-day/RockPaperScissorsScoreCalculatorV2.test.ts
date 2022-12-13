import { examplePlayResults, problemPlayResults } from '../fixtures/2ndDayExamplePlayResults';
import { RockPaperScissorsScoreCalculatorV2 } from '../../src/2nd-day/RockPaperScissorsScoreCalculatorV2';

describe('RockPaperScissorsScoreCalculatorV2 tests', () => {

  const exampleScoreCalculator = new RockPaperScissorsScoreCalculatorV2(examplePlayResults);
  const problemScoreCalculator = new RockPaperScissorsScoreCalculatorV2(problemPlayResults);

  it('should return score of 4 at the first round of the example play', () => {
    const result = exampleScoreCalculator.getRoundScore(0);
    expect(result).toBe(4);
  });

  it('should return score of 1 at the second round of the example play', () => {
    const result = exampleScoreCalculator.getRoundScore(1);
    expect(result).toBe(1);
  });

  it('should return score of 7 at the third round of the example play', () => {
    const result = exampleScoreCalculator.getRoundScore(2);
    expect(result).toBe(7);
  });

  it('should return score of 12 as a total rounds score of the example play', () => {
    const result = exampleScoreCalculator.getTotalRoundsScore();
    expect(result).toBe(12);
  });

  it('should return score of 12881 as a total rounds score of the problem play', () => {
    const result = problemScoreCalculator.getTotalRoundsScore();
    expect(result).toBe(12881);
  });

});