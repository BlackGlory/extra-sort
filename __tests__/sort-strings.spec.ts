import { sortStringsAscending, sortStringsDescending } from '@src/sort-strings'

test('sortStringsAscending', () => {
  const arr: string[] = ['10', '2', '3', '2']

  sortStringsAscending(arr)

  expect(arr).toStrictEqual(['10', '2', '2', '3'])
})

test('sortStringsDescending', () => {
  const arr: string[] = ['10', '2', '3', '2']

  sortStringsDescending(arr)

  expect(arr).toStrictEqual(['3', '2', '2', '10'])
})
