enum MyHandScore {
  X = 1,
  Y = 2,
  Z = 3,
}

export class RockPaperScissorsScoreCalculator {
  private readonly playResults: string[][] = [];

  constructor(playResults: string) {
    this.playResults = this.parsePlayResults(playResults);
  }

  public getRoundScore(round: number): number {
    const opponentHand = this.playResults[round][0];
    const myHand = this.playResults[round][1];

    let roundResult: 0 | 3 | 6 = 0;

    if (opponentHand === 'A' && myHand === 'X') {
      roundResult = 3;
    }

    if (opponentHand === 'A' && myHand === 'Y') {
      roundResult = 6;
    }

    if (opponentHand === 'A' && myHand === 'Z') {
      roundResult = 0;
    }

    if (opponentHand === 'B' && myHand === 'X') {
      roundResult = 0;
    }

    if (opponentHand === 'B' && myHand === 'Y') {
      roundResult = 3;
    }

    if (opponentHand === 'B' && myHand === 'Z') {
      roundResult = 6;
    }

    if (opponentHand === 'C' && myHand === 'X') {
      roundResult = 6;
    }

    if (opponentHand === 'C' && myHand === 'Y') {
      roundResult = 0;
    }

    if (opponentHand === 'C' && myHand === 'Z') {
      roundResult = 3;
    }

    return roundResult + MyHandScore[myHand as keyof typeof MyHandScore];
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
