import { sign, logc, log10 } from "./mathFunctions.js";

describe("Тести для функції sign", () => {
  test("Позитивне число", () => {
    expect(sign(5)).toBe(1);
  });

  test("Негативне число", () => {
    expect(sign(-10)).toBe(-1);
  });

  test("Нуль", () => {
    expect(sign(0)).toBe(0);
  });

  test("Дробове число", () => {
    expect(sign(2.5)).toBe(1);
  });

  test("Від’ємне дробове", () => {
    expect(sign(-2.5)).toBe(-1);
  });
});

describe("Тести для функції logc", () => {
  test("log(1) = 0", () => {
    expect(logc(1)).toBe(0);
  });

  test("log(e) = 1", () => {
    expect(logc(Math.E)).toBeCloseTo(1);
  });

  test("log(10)", () => {
    expect(logc(10)).toBeCloseTo(2.302);
  });

  test("log(0) = -Infinity", () => {
    expect(logc(0)).toBe(-Infinity);
  });

  test("log(-1) = NaN", () => {
    expect(logc(-1)).toBeNaN();
  });
});

describe("Тести для функції log10", () => {
  test("log10(1) = 0", () => {
    expect(log10(1)).toBe(0);
  });

  test("log10(10) = 1", () => {
    expect(log10(10)).toBe(1);
  });

  test("log10(100) = 2", () => {
    expect(log10(100)).toBe(2);
  });

  test("log10(0) = -Infinity", () => {
    expect(log10(0)).toBe(-Infinity);
  });

  test("log10(-10) = NaN", () => {
    expect(log10(-10)).toBeNaN();
  });
});
