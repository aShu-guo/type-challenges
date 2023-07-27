type MyExclude<T, U> = T extends U ? never : T

const test: MyExclude<'a' | 'b' | 'c', 'a'> = 'b'
