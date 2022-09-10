import { sortNumbersAscending, sortNumbersDescending } from '@src/sort-numbers'

test('sortNumbersAscending', () => {
  const arr: number[] = [3, 2, 10, 2]

  sortNumbersAscending(arr)

  expect(arr).toStrictEqual([2, 2, 3, 10])
})

test('sortNumbersDescending', () => {
  const arr: number[] = [3, 2, 10, 2]

  sortNumbersDescending(arr)

  expect(arr).toStrictEqual([10, 3, 2, 2])
})
