export function sortNumbersAscending(arr: number[]): void {
  arr.sort(compareNumbersAscending)
}

export function sortNumbersDescending(arr: number[]): void {
  arr.sort(compareNumbersDescending)
}

export function compareNumbersAscending(a: number, b: number): number {
  return a - b
}

export function compareNumbersDescending(a: number, b: number): number {
  return b - a
}
