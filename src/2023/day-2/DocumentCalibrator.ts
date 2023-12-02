export class DocumentCalibrator {
  constructor(private readonly document: string) {}

  calibrate(lineNumber: number): number {
    const line: string = this.document.split('\n')[lineNumber];
    const lineCharacters = line.split('');

    const firstDigit = String(lineCharacters.find(Number));
    const lastDigit = String(lineCharacters.reverse().find(Number));

    return Number(firstDigit + lastDigit);
  }

  addCalibrationValues(): number {
    let totalCalibrationValues: number = 0;
    const documentLines = this.document.split('\n');

    documentLines.forEach((_, index) => {
      totalCalibrationValues += this.calibrate(index);
    });

    return totalCalibrationValues;
  }

  calibrateWithLetters(lineNumber: number): number {
    const StringNumbers: Record<string, string> = {
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      one: '1',
      two: '2',
      three: '3',
      four: '4',
      five: '5',
      six: '6',
      seven: '7',
      eight: '8',
      nine: '9',
    };
    const line: string = this.document.split('\n')[lineNumber];

    let firstDigitIndex: number = line.length;
    let lastDigitIndex: number = 0;

    let firstDigit: string;
    let lastDigit: string;

    Object.keys(StringNumbers).forEach((key) => {
      if (line.includes(key)) {
        if (line.indexOf(key) < firstDigitIndex) {
          firstDigitIndex = line.indexOf(key);
          firstDigit = StringNumbers[key];
        }

        if (line.lastIndexOf(key) >= lastDigitIndex) {
          lastDigitIndex = line.lastIndexOf(key);
          lastDigit = StringNumbers[key];
        }
      }
    });

    return Number(firstDigit + lastDigit);
  }

  addCalibrationValuesWithLetters(): number {
    let totalCalibrationValues: number = 0;
    const documentLines = this.document.split('\n');

    documentLines.forEach((_, index) => {
      totalCalibrationValues += this.calibrateWithLetters(index);
    });

    return totalCalibrationValues;
  }
}
