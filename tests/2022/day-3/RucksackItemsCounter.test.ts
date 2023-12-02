import { RucksackItemsCounter } from '../../../src/2022/day-3/RucksackItemsCounter';
import { exampleInput, problemInput } from '../fixtures/Day3Input';

describe('RucksackItemsCounter tests', () => {
  const exampleRucksackItemsCounter = new RucksackItemsCounter(exampleInput);
  const problemRucksackItemsCounter = new RucksackItemsCounter(problemInput);

  it('should return p as a shared item between compartments on the first example rucksack', () => {
    expect(exampleRucksackItemsCounter.getRubsackSharedItem(0)).toBe('p');
  });

  it('should return L as a shared item between compartments on the second example rucksack', () => {
    expect(exampleRucksackItemsCounter.getRubsackSharedItem(1)).toBe('L');
  });

  it('should return P as a shared item between compartments on the third example rucksack', () => {
    expect(exampleRucksackItemsCounter.getRubsackSharedItem(2)).toBe('P');
  });

  it('should return v as a shared item between compartments on the fourth example rucksack', () => {
    expect(exampleRucksackItemsCounter.getRubsackSharedItem(3)).toBe('v');
  });

  it('should return t as a shared item between compartments on the fifth example rucksack', () => {
    expect(exampleRucksackItemsCounter.getRubsackSharedItem(4)).toBe('t');
  });

  it('should return s as a shared item between compartments on the sixth example rucksack', () => {
    expect(exampleRucksackItemsCounter.getRubsackSharedItem(5)).toBe('s');
  });

  it('should return 157 as a result of sum of priorities of each example rucksack', () => {
    expect(exampleRucksackItemsCounter.calculatePrioritySum()).toBe(157);
  });

  it('should return 7793 as a result of sum of priorities of each problem rucksack', () => {
    expect(problemRucksackItemsCounter.calculatePrioritySum()).toBe(7793);
  });

  it('should form groups for each set of 3 rucksacks', () => {
    expect(exampleRucksackItemsCounter.getGroupedRucksacks()[0]).toStrictEqual([
      'vJrwpWtwJgWrhcsFMMfFFhFp',
      'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
      'PmmdzqPrVvPwwTWBwg',
    ]);
    expect(exampleRucksackItemsCounter.getGroupedRucksacks()[1]).toStrictEqual([
      'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
      'ttgJtRGJQctTZtZT',
      'CrZsJsPPZsGzwwsLwLmpwMDw',
    ]);
  });

  it('should return 18 as a priority of first example group', () => {
    expect(exampleRucksackItemsCounter.getGroupedPriority(0)).toBe(18);
  });

  it('should return 52 as a priority of second example group', () => {
    expect(exampleRucksackItemsCounter.getGroupedPriority(1)).toBe(52);
  });

  it('should return 70 as a priority sum of all example groups', () => {
    expect(exampleRucksackItemsCounter.getGroupedPrioritySum()).toBe(70);
  });

  it('should return 2499 as a priority sum of all problem groups', () => {
    expect(problemRucksackItemsCounter.getGroupedPrioritySum()).toBe(2499);
  });
});
