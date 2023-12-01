enum Result {
  Lose = 'X',
  Draw = 'Y',
  Win = 'Z',
}

enum ResultScore {
  'X' = 0,
  'Y' = 3,
  'Z' = 6,
}

enum Hand {
  Rock = 'A',
  Paper = 'B',
  Scissors = 'C',
}

enum HandScore {
  'A' = 1,
  'B' = 2,
  'C' = 3,
}

export class RockPaperScissorsScoreCalculatorV2 {
  private readonly playResults: string[][] = [];

  constructor(playResults: string) {
    this.playResults = this.parsePlayResults(playResults);
  }

  public getRoundScore(round: number): number {
    const opponentHand = this.playResults[round][0];
    const expectedRoundResult = this.playResults[round][1];

    let myHand: Hand | null = null;
    let roundResult: 0 | 3 | 6 = 0;

    if (opponentHand === Hand.Rock && expectedRoundResult === Result.Lose) {
      myHand = Hand.Scissors;
    }

    if (opponentHand === Hand.Rock && expectedRoundResult === Result.Draw) {
      myHand = Hand.Rock;
    }

    if (opponentHand === Hand.Rock && expectedRoundResult === Result.Win) {
      myHand = Hand.Paper;
    }

    if (opponentHand === Hand.Paper && expectedRoundResult === Result.Lose) {
      myHand = Hand.Rock;
    }

    if (opponentHand === Hand.Paper && expectedRoundResult === Result.Draw) {
      myHand = Hand.Paper;
    }

    if (opponentHand === Hand.Paper && expectedRoundResult === Result.Win) {
      myHand = Hand.Scissors;
    }

    if (opponentHand === Hand.Scissors && expectedRoundResult === Result.Lose) {
      myHand = Hand.Paper;
    }

    if (opponentHand === Hand.Scissors && expectedRoundResult === Result.Draw) {
      myHand = Hand.Scissors;
    }

    if (opponentHand === Hand.Scissors && expectedRoundResult === Result.Win) {
      myHand = Hand.Rock;
    }

    roundResult = ResultScore[expectedRoundResult as keyof typeof ResultScore];

    return roundResult + HandScore[myHand as keyof typeof HandScore];
  }

  public getTotalRoundsScore(): number {
    let totalRoundsScore: number = 0;

    for (let i = 0; i < this.playResults.length; i++) {
      totalRoundsScore += this.getRoundScore(i);
    }

    return totalRoundsScore;
  }

  private parsePlayResults(playResults: string) {
    return playResults
      .trim()
      .split('\n')
      .map((el) => el.split(' '));
  }
}
