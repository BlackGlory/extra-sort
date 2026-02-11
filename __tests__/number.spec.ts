import { describe, test, expect } from 'vitest'
import {
  sortNumbersAscending
, sortNumbersDescending
, compareNumbersAscending
, compareNumbersDescending
} from '@src/number.js'

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

describe('compareNumbersAscending', () => {
  test('a > b', () => {
    const result = compareNumbersAscending(2, 1)

    expect(result).toBeLessThanOrEqual(1)
  })

  test('a < b', () => {
    const result = compareNumbersAscending(1, 2)

    expect(result).toBeLessThanOrEqual(-1)
  })

  test('a = b', () => {
    const result = compareNumbersAscending(1, 1)

    expect(result).toBe(0)
  })
})

describe('compareNumbersDescending', () => {
  test('a > b', () => {
    const result = compareNumbersDescending(2, 1)

    expect(result).toBeLessThanOrEqual(-1)
  })

  test('a < b', () => {
    const result = compareNumbersDescending(1, 2)

    expect(result).toBeLessThanOrEqual(1)
  })

  test('a = b', () => {
    const result = compareNumbersDescending(1, 1)

    expect(result).toBe(0)
  })
})
