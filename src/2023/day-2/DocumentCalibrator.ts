interface GameSet {
  cubes: Cube;
}

interface Cube {
  red: number;
  green: number;
  blue: number;
}

interface Game {
  id: number;
  sets: GameSet[];
}

interface GameInputSetup {
  gamesString: string;
  cubeSetup: Cube;
}

export class GameValidator {
  private games: Game[];
  private cubes: Cube;

  public initialSetup(gameSetup: GameInputSetup) {
    this.games = this.getGames(gameSetup.gamesString);
    this.cubes = gameSetup.cubeSetup;
  }

  public addPossibleGames(): number {
    let addedPossibleGamesIds = 0;

    this.games.forEach((game) => {
      if (this.isImpossibleGame(game)) {
        return;
      }
      addedPossibleGamesIds += game.id;
    });

    return addedPossibleGamesIds;
  }

  private getGames(gamesString: string): Game[] {
    const games: Game[] = [];
    gamesString.split('\n').forEach((gameString) => {
      const gameId = +gameString[gameString.indexOf(':') - 1];
      const gameSets: GameSet[] = gameString
        .split(':')[1]
        .split(';')
        .map((gameSetString) => {
          return {
            cubes: {
              red: gameSetString.includes('red') ? +gameSetString[gameSetString.indexOf('red') - 3] : 0,
              blue: gameSetString.includes('blue') ? +gameSetString[gameSetString.indexOf('blue') - 3] : 0,
              green: gameSetString.includes('green') ? +gameSetString[gameSetString.indexOf('green') - 3] : 0,
            },
          };
        });

      games.push({ id: gameId, sets: gameSets });
    });

    return games;
  }

  private isImpossibleGame(game: Game): boolean {
    return game.sets.some((set) => {
      return this.cubes.red < set.cubes.red || this.cubes.blue < set.cubes.blue || this.cubes.green < set.cubes.green;
    });
  }
}
