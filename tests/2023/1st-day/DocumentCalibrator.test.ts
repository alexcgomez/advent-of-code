import { DocumentCalibrator } from '../../../src/2023/1st-day/DocumentCalibrator';
import {
  exampleDocumentCalibratorInput,
  problemDocumentCalibratorInput,
  secondExampleDocumentCalibratorInput,
} from '../fixtures/1stDayDocumentCalibrator';

describe('DocumentCalibrator', () => {
  const exampleDocumentCalibrator = new DocumentCalibrator(exampleDocumentCalibratorInput);
  const problemDocumentCalibrator = new DocumentCalibrator(problemDocumentCalibratorInput);

  // Part two
  const secondExampleDocumentCalibrator = new DocumentCalibrator(secondExampleDocumentCalibratorInput);

  it('should return 12 on example document line 1', () => {
    expect(exampleDocumentCalibrator.calibrate(0)).toBe(12);
  });

  it('should return 38 on example document line 2', () => {
    expect(exampleDocumentCalibrator.calibrate(1)).toBe(38);
  });

  it('should return 15 on example document line 3', () => {
    expect(exampleDocumentCalibrator.calibrate(2)).toBe(15);
  });

  it('should return 77 on example document line 4', () => {
    expect(exampleDocumentCalibrator.calibrate(3)).toBe(77);
  });

  it('should return 142 for the sum of all the example document calibration values', () => {
    expect(exampleDocumentCalibrator.addCalibrationValues()).toBe(142);
  });

  it('should return x for the sum of all the problem document calibration values', () => {
    expect(problemDocumentCalibrator.addCalibrationValues()).toBe(54634);
  });

  // Part two

  it('should return 29 on second example document line 1', () => {
    expect(secondExampleDocumentCalibrator.calibrateWithLetters(0)).toBe(29);
  });

  it('should return 83 on second example document line 2', () => {
    expect(secondExampleDocumentCalibrator.calibrateWithLetters(1)).toBe(83);
  });
});
