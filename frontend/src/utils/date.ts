import { pad } from "./string";

export const getHours = (date: string): string => {
  const dateObject = new Date(date);
  return `${pad(dateObject.getHours(), 2)}:${pad(dateObject.getMinutes(), 2)}`;
};

export const getDate = (date: string): string => {
  const months = [
    "JAN",
    "FEV",
    "MAR",
    "ABR",
    "MAI",
    "JUN",
    "JUL",
    "AGO",
    "SET",
    "OUT",
    "NOV",
    "DEZ"
  ];
  const dateObject = new Date(date);
  return `${pad(dateObject.getDate(), 2)} ${months[dateObject.getMonth()]}`;
};
