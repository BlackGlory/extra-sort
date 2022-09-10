import { Benchmark } from 'extra-benchmark'
import { go } from '@blackglory/prelude'
import { sortStringsAscending } from '..'

const benchmark = new Benchmark('sort strings ascending', {
  warmUps: 100000
, runs: 100000
})

benchmark.addCase('sortStringsAscending', () => {
  return () => {
    const arr: string[] = ['10', '2', '3', '2']

    sortStringsAscending(arr)
  }
})

benchmark.addCase('.sort()', () => {
  return () => {
    const arr: string[] = ['10', '2', '3', '2']

    arr.sort()
  }
})

benchmark.addCase('.sort(compare)', () => {
  return () => {
    const arr: string[] = ['10', '2', '3', '2']

    arr.sort(compare)
  }

  function compare(a: string, b: string): number {
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
