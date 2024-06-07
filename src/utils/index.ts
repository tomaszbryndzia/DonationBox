import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getMonthName(monthNumber: number): string {
  if (monthNumber < 0 || monthNumber > 11) {
    return "Invalid month number";
  }

  const date = new Date(0, monthNumber);
  return date.toLocaleString("en-US", { month: "long" });
}

export function formatNumber(inputValue: string, MAX_VALUE?: number): string {
  const value = inputValue.replace(/[^0-9.]/g, "");

  let [number, decimal] = value.split(".");
  if (number === "") {
    number = "0.01";
  }

  decimal = decimal?.substring(0, 2);

  number = Number(number).toLocaleString();

  let formattedValue = decimal !== undefined ? `${number}.${decimal}` : number;

  let valueWithoutCommas = formattedValue.replace(/,/g, "");
  if (MAX_VALUE && parseFloat(valueWithoutCommas) >= MAX_VALUE) {
    formattedValue = MAX_VALUE.toLocaleString();
  }

  return formattedValue;
}

export function calculateMonthsDifference(
  targetMonth: number,
  targetYear: number
): number {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const currentTotalMonths = currentYear * 12 + currentMonth;
  const targetTotalMonths = targetYear * 12 + targetMonth;

  const monthDifference = targetTotalMonths - currentTotalMonths;

  return monthDifference + 1;
}
