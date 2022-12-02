import { RockPaperScissorsScoreCalculator } from '../../src/2nd-day/RockPaperScissorsScoreCalculator';
import { examplePlayResults, problemPlayResults } from '../fixtures/2ndDayExamplePlayResults';

describe('RockPaperScissorsScoreCalculator tests', () => {

  const exampleScoreCalculator = new RockPaperScissorsScoreCalculator(examplePlayResults);
  const problemScoreCalculator = new RockPaperScissorsScoreCalculator(problemPlayResults)


  it('should return score of 8 at the first round of the example play', () => {
    const result = exampleScoreCalculator.getRoundScore(0);
    expect(result).toBe(8);
  });

  it('should return score of 8 at the second round of the example play', () => {
    const result = exampleScoreCalculator.getRoundScore(1);
    expect(result).toBe(1);
  });

  it('should return score of 8 at the third round of the example play', () => {
    const result = exampleScoreCalculator.getRoundScore(2);
    expect(result).toBe(6);
  });

  it('should return score of 15 as a total rounds score of the example play', () => {
    const result = exampleScoreCalculator.getTotalRoundsScore();
    expect(result).toBe(15);
  });

  it('should return score of 13682 as a total rounds score of the problem play', () => {
    const result = problemScoreCalculator.getTotalRoundsScore();
    expect(result).toBe(13682);
  });

});