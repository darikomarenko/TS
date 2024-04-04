// Array<string>
// string[]
// Promise<number>

type TypeFactory<T> = T 
type xType = TypeFactory<string>

function toArray<T>(...args: T[]): T[] {
return args;
}

toArray<number>(1,2,3)
toArray('ad', 'asd')