import { Benchmark } from 'extra-benchmark'
import { go } from '@blackglory/prelude'
import { sortNumbersAscending } from '..'

const benchmark = new Benchmark('sort numbers ascending', {
  warms: 1000
, runs: 1000
})

benchmark.addCase('sortNumbersAscending', () => {
  return () => {
    const arr: number[] = [3, 2, 10, 2]

    sortNumbersAscending(arr)
  }
})

benchmark.addCase('.sort((a, b) => a - b)', () => {
  return () => {
    const arr: number[] = [3, 2, 10, 2]

    arr.sort(compare)
  }

  function compare(a: number, b: number): number {
    return a - b
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
