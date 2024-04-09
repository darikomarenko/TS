export {};

interface Todo {
    id: string,
    title: string,
    description: string,
    completed: boolean,
    createdAt: number
}
//только прочитать поля
type ReadOnlyTodod = Readonly<Todo>
//все поля становятся необязательными
type PartialTodo = Partial<Todo>
function updateTodo(todo: Todo, fieldsToUpdate: PartialTodo) {
    return {...todo, ...fieldsToUpdate};
}
type RequiredTodo = Required<Todo>;