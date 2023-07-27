type MyOmit<T, K extends keyof any> = {
  [V in keyof T as V extends K ? never : V]: T[V]
}

interface Todo {
  title: string
  description: string
  completed: boolean
}

const aaaabb: Omit<Todo, 'description'> = {
  title: '',
  completed: true,
}
