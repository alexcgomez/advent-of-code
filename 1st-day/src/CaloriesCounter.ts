export class CaloriesCounter {
  constructor(private elvesItemsCalories: string) {
  }

  public countCalories(): number {

    const elvesCaloriesByItem: string[] = this.elvesItemsCalories.split('\n');

    let totalCaloriesByElf: number[] = [];
    let caloriesCounter = 0;

    elvesCaloriesByItem.forEach((item, index, array) => {

      if(index === array.length - 1) {
        caloriesCounter += Number(item);
        totalCaloriesByElf.push(caloriesCounter);
      }

      if (item === '') {
        totalCaloriesByElf.push(caloriesCounter);
        caloriesCounter = 0;
      } else {
        caloriesCounter += Number(item);
      }
    })

    return Math.max(...totalCaloriesByElf);
  }
}