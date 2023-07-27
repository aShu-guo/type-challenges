type Equal<T, U> = (<G>() => G extends T ? 1 : 2) extends (<G>() => G extends U ? 1 : 2) ? true : false

type Includes<T extends readonly any[], U> = Equal<T[0], U> extends true
    ? true : T extends [T[0], ...infer Rest] ? Includes<Rest, U> : false

// const ffe: Includes<[{}], { a: 'A' }> = true

type MyTest = Includes<[string, number, object], { name: 'xiaoming' }>
// const aaaass: MyTest = true

type AAA = { name: 'xiaoming' }
const hshsh: AAA = {name: 'xiaoming'}
