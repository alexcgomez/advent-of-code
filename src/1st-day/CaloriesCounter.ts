export class CaloriesCounter {

  private readonly totalCaloriesByElfAscendingOrder: number[];
  constructor(private elvesItemsCalories: string) {
    this.totalCaloriesByElfAscendingOrder = this.getTotalCaloriesByElf();
  }

  public getTopOneCaloriesCount(): number {
    return Math.max(...this.totalCaloriesByElfAscendingOrder);
  }

  public getTopThreeCaloriesCount(): number {
    let topThreeCaloriesCount = 0;

    for (let i = 0; i < 3; i++) {
      topThreeCaloriesCount += this.totalCaloriesByElfAscendingOrder[i];
    }

    return topThreeCaloriesCount;
  }

  private getTotalCaloriesByElf(): number[] {
    const elvesCaloriesByItem: string[] = this.elvesItemsCalories.split('\n');

    let totalCaloriesByElf: number[] = [];
    let caloriesCounter = 0;

    elvesCaloriesByItem.forEach((item, index, array) => {

      if (index === array.length - 1) {
        caloriesCounter += Number(item);
        totalCaloriesByElf.push(caloriesCounter);
      }

      if (item === '') {
        totalCaloriesByElf.push(caloriesCounter);
        caloriesCounter = 0;
      } else {
        caloriesCounter += Number(item);
      }
    });
    return totalCaloriesByElf.sort((a, b) => b - a);
  }
}