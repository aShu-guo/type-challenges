type MyAwaited<T> = T extends null | undefined ? T
  : T extends object & { then(onfulfilled: infer F): any } ?
    F extends ((value: infer K, ...args: any[]) => any) ?
      MyAwaited<K>
      : never
    : T

type X = Promise<string>

type TEs = MyAwaited<X>
