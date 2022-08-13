export const pad = (value: number | string, length: number): string => {
  return value.toString().length < length
    ? pad("0" + value.toString(), length)
    : value.toString();
};
