type DeepReadonly<T> = {
  readonly [p in keyof T]: T[p] extends object ? T[p] extends (...args: any) => any ? T[p] : DeepReadonly<T[p]> : T[p]
}
