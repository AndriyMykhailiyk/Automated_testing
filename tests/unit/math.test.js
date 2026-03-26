import { test, expect } from "@playwright/test";
import { sum, subtract, multiply, divide, isPositive } from "../../utils/math";

test("sum", () => {
  expect(sum(2, 3)).toBe(5);
});

test("subtract", () => {
  expect(subtract(5, 3)).toBe(2);
});

test("multiply", () => {
  expect(multiply(2, 3)).toBe(6);
});

test("divide", () => {
  expect(divide(6, 2)).toBe(3);
});

test("isPositive", () => {
  expect(isPositive(5)).toBe(true);
});
