export {};

type Names = Record<string, number>;
type BrandNames = Record<WellKnownBrands, string>

//const myBrands: BrandNames = {
   // apple: '',
//}

interface Todo {
    id: string,
    title: string,
    description: string,
    completed: boolean,
    createdAt: number
}

type SimpleTodo = Pick<Todo, 'id'| 'title'| 'completed'>
type SimpleTodoTwo = Omit<Todo, 'description'| 'createdAt'>
