export function sortStringsAscending(arr: string[]): void {
  arr.sort()
}

export function sortStringsDescending(arr: string[]): void {
  arr.sort((a, b) => {
    if (a > b) {
      return -1
    } else if (a < b) {
      return 1
    } else {
      return 0
    }
  })
}
