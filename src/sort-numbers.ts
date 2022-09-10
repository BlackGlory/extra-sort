export function sortNumbersAscending(arr: number[]): void {
  arr.sort((a, b) => {
    if (a > b) {
      return 1
    } else if (a < b) {
      return -1
    } else {
      return 0
    }
  })
}

export function sortNumbersDescending(arr: number[]): void {
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
