type TupleToObject<T extends readonly any[]> = {
  [K in T[number]]: K
}

const tuple1 = ['tesla', 'model 3'] as const

const aaa: TupleToObject<typeof tuple1> = {
  'tesla': 'tesla',
  'model 3': 'model 3',
}
