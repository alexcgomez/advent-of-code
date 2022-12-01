export class CaloriesCounter {
  constructor(private elvesItemsCalories: string) {
  }

  public countCalories(): number {
    console.log(this.elvesItemsCalories.split(' ').map(el => el.trim()));
    return 0;
  }
}