export class RucksackItemsCounter {
  private readonly characters: string[] = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  private readonly rucksackList: string[];

  constructor(rucksackListInput: string) {
    this.rucksackList = this.parseRucksackInput(rucksackListInput);
  }

  public getRubsackSharedItem(rucksackIndex: number): string | undefined {
    const rucksack = this.rucksackList[rucksackIndex].split('');
    const middleIndex = Math.floor(rucksack.length / 2);
    const firstCompartment = rucksack.splice(0, middleIndex);
    return rucksack.find((item) => firstCompartment.some((i) => i === item));
  }

  public calculatePrioritySum(): number {
    let totalPriority = 0;
    this.rucksackList.forEach((_, index) => {
      const sharedItem = this.getRubsackSharedItem(index);
      if (sharedItem) {
        totalPriority += this.characters.indexOf(sharedItem) + 1;
      }
    });
    return totalPriority;
  }

  public getGroupedRucksacks(): string[][] {
    const groupedRucksacks: string[][] = [[]];
    let counter: number = 0;
    let groupedRucksacksIndex: number = 0;

    this.rucksackList.forEach((rucksack) => {
      if (counter == 3) {
        counter = 0;
        groupedRucksacksIndex += 1;
        groupedRucksacks.push([]);
      }
      counter++;
      groupedRucksacks[groupedRucksacksIndex].push(rucksack);
    });

    return groupedRucksacks;
  }

  public getGroupedPriority(groupIndex: number): number {
    let foundItemPriority: number = 0;
    const splittedGroups: string[][] = this.getGroupedRucksacks()[groupIndex].map((e) => e.split(''));

    splittedGroups[0].forEach((item) => {
      const foundInSecondGroup = !!splittedGroups[1].find((i) => i === item);
      const foundInThirdGroup = !!splittedGroups[2].find((i) => i === item);

      if (foundInSecondGroup && foundInThirdGroup) {
        foundItemPriority = this.getItemPriority(item);
      }
    });

    return foundItemPriority;
  }

  private getItemPriority(item: string): number {
    return this.characters.indexOf(item) + 1;
  }

  public getGroupedPrioritySum(): number {
    const groups = this.getGroupedRucksacks();
    let totalGroupPriority = 0;

    groups.forEach((_, index) => {
      totalGroupPriority += this.getGroupedPriority(index);
    });
    return totalGroupPriority;
  }

  private parseRucksackInput(rucksackListInput: string): string[] {
    return rucksackListInput.split('\n');
  }
}
