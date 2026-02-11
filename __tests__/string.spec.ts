import { describe, test, expect } from 'vitest'
import {
  sortStringsAscending
, sortStringsDescending
, compareStringsAscending
, compareStringsDescending
} from '@src/string.js'

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

describe('compareStringAscending', () => {
  test('a > b', () => {
    const result = compareStringsAscending('2', '10')

    expect(result).toBeLessThanOrEqual(1)
  })

  test('a < b', () => {
    const result = compareStringsAscending('10', '2')

    expect(result).toBeLessThanOrEqual(-1)
  })

  test('a = b', () => {
    const result = compareStringsAscending('1', '1')

    expect(result).toBe(0)
  })
})

describe('compareStringsDescending', () => {
  test('a > b', () => {
    const result = compareStringsDescending('2', '10')

    expect(result).toBeLessThanOrEqual(-1)
  })

  test('a < b', () => {
    const result = compareStringsDescending('10', '2')

    expect(result).toBeLessThanOrEqual(1)
  })

  test('a = b', () => {
    const result = compareStringsDescending('1', '1')

    expect(result).toBe(0)
  })
})
