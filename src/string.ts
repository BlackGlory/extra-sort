export function sortStringsAscending(arr: string[]): void {
  arr.sort()
}

export function sortStringsDescending(arr: string[]): void {
  arr.sort(compareStringsDescending)
}

export function compareStringsAscending(a: string, b: string): number {
  if (a > b) {
    return 1
  } else if (a < b) {
    return -1
  } else {
    return 0
  }
}

export function compareStringsDescending(a: string, b: string): number {
  if (a > b) {
    return -1
  } else if (a < b) {
    return 1
  } else {
    return 0
  }
}
