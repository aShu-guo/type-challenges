type MyExclude2<T, K> = T extends K ? never : T

// type MyReadonly2<T, K extends keyof T = keyof T> = Omit<T, K> & Readonly<Pick<T, K>>

type MyReadonly2<T, K extends keyof T = keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
} & {
  readonly [P in K]: T[P]
}

type A = string | number
type B = string
type C = A extends B ? true : false
type D = B extends A ? true : false

const c: C = false
