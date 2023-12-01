export class DocumentCalibrator {
  constructor(private readonly document: string) {}

  calibrateWithLetters(lineNumber: number): number {
    let firstDigit: string;
    let lastDigit: string;

    const StringNumbers: Record<string, string> = {
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
    const lineCharacters = line.split('');

    firstDigit = String(lineCharacters.find(Number));
    lastDigit = String(lineCharacters.reverse().find(Number));

    Object.keys(StringNumbers).forEach((stringNumber) => {
      if (line.includes(stringNumber)) {
        const stringNumberIndex: number = line.indexOf(stringNumber);
        const firstDigitIndex: number = line.indexOf(firstDigit);
        const lastDigitIndex: number = line.indexOf(lastDigit);

        if (firstDigitIndex === -1) {
          firstDigit = StringNumbers[stringNumber];
        }

        if (lastDigitIndex === -1) {
          lastDigit = StringNumbers[stringNumber];
        }

        if (firstDigitIndex >= 0 && stringNumberIndex > firstDigitIndex) {
          firstDigit = StringNumbers[stringNumber];
        }

        if (lastDigitIndex >= 0 && stringNumberIndex > lastDigitIndex) {
          lastDigit = StringNumbers[stringNumber];
        }
      }
    });

    return Number(firstDigit + lastDigit);
  }

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
}
