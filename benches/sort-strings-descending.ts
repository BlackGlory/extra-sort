import { Benchmark } from 'extra-benchmark'
import { go } from '@blackglory/prelude'
import { sortStringsDescending } from '..'

const benchmark = new Benchmark('sort strings descending', {
  warms: 1000
, runs: 1000
})

benchmark.addCase('sortStringsDescending', () => {
  return () => {
    const arr: string[] = ['10', '2', '3', '2']

    sortStringsDescending(arr)
  }
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

go(async () => {
  console.log(benchmark.name)
  for await (const result of benchmark.run()) {
    console.log(result)
  }
})
