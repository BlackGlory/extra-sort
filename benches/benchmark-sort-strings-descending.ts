import { Benchmark } from 'extra-benchmark'
import { go } from '@blackglory/prelude'
import { sortStringsDescending } from '..'

const benchmark = new Benchmark('sort strings descending', {
  warmUps: 10000
, runs: 10000
})

benchmark.addCase('.sort().reverse()', () => {
  return () => {
    const arr: string[] = ['10', '2', '3', '2']

    arr.sort().reverse()
  }
})

benchmark.addCase('.sort(compare)', () => {
  return () => {
    const arr: string[] = ['10', '2', '3', '2']

    arr.sort(compare)
  }

  function compare(a: string, b: string): number {
    if (a > b) {
      return -1
    } else if (a < b) {
      return 1
    } else {
      return 0
    }
  }
})

benchmark.addCase('sortStringsDescending', () => {
  return () => {
    const arr: string[] = ['10', '2', '3', '2']

    sortStringsDescending(arr)
  }
})

go(async () => {
  console.log(benchmark.name)
  for await (const result of benchmark.run()) {
    console.log(result)
  }
})
