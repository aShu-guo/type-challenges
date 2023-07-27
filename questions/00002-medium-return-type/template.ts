type MyReturnType<T extends (...args: any[]) => any> = T extends (...args: any[]) => infer D ? D : never
