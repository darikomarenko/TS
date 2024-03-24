enum ShapeKind {
    Circle,
    Square,
}

const myShape = ShapeKind.Circle;

interface Circle {
    kind: ShapeKind.Circle,
    sideLength: number,
}

const circle1: Circle = {
    sideLength: 30,
    kind: 0,
}

enum StatusCode {
    ERROR = 500,
    NOT_FOUND = 404,
    NOT_AUTH = 403,
}

enum Grades {
    Junior = 'junior',
    Middle = 'middle',
    Senior = 'senior'
}