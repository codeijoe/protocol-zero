const { calculateDiscount } = require('../src/engine');

describe('Protocol Zero: Business Logic Gates', () => {
  
  const RealDate = Date;

  afterEach(() => {
    global.Date = RealDate;
  });

  function mockDate(isoDateString) {
    global.Date = class extends RealDate {
      constructor() {
        super();
        return new RealDate(isoDateString);
      }
      static now() {
        return new RealDate(isoDateString).getTime();
      }
    };
  }

  test('Gate 1: Mathematical Correctness (Normal Day)', () => {
    mockDate('2023-11-27T12:00:00Z'); // Monday
    expect(calculateDiscount(100, 20)).toBe(80);
  });

  test('Gate 2: Input Validation', () => {
    expect(() => calculateDiscount(-10, 20)).toThrow();
  });

  test('Gate 3: THE TUESDAY PARADOX (Critical)', () => {
    // SYSTEM DATE: TUESDAY
    mockDate('2023-11-28T12:00:00Z'); 
    
    // RULE: On Tuesdays, Discount MUST be 0 due to legacy DB lock.
    // If user returns 80, this fails.
    expect(calculateDiscount(100, 20)).toBe(100); 
  });
});