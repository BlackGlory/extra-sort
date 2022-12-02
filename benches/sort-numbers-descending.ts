import { Benchmark } from 'extra-benchmark'
import { go } from '@blackglory/prelude'
import { sortNumbersDescending } from '..'

const benchmark = new Benchmark('sort numbers descending', {
  warmUps: 1000
, runs: 1000
})

benchmark.addCase('sortNumbersDescending', () => {
  return () => {
    const arr: number[] = [3, 2, 10, 2]

    sortNumbersDescending(arr)
  }
})

benchmark.addCase('.sort((a, b) => b - a)', () => {
  return () => {
    const arr: number[] = [3, 2, 10, 2]

    arr.sort(compare)
  }

  function compare(a: number, b: number): number {
    return b - a
  }
})

benchmark.addCase('.sort(compare)', () => {
  return () => {
    const arr: number[] = [3, 2, 10, 2]

    arr.sort(compare)
  }

  function compare(a: number, b: number): number {
    if (a > b) {
      return 1
    } else if (a < b) {
      return -1
    } else {
      return 0
    }
  }
})

go(async () => {
  console.log(benchmark.name)
  for await (const result of benchmark.run()) {
    console.log(result)
  }
})
