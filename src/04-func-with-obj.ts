function printPoint(point: {x: string, y: string}): void {
    console.log(`Coordinates: ${point.x} ${point.y}`)
}

const obj1 = {
    x: '1',
    y: '2'
}

printPoint(obj1)
//минимум 2 переменных, больше можно
const obj2 = {
    x: '1',
    y: '2',
    z: '3'
}

function printName(user: {
    firstName: string,
    lastName?: string
}): void {
console.log('Hello', user.firstName.toUpperCase())
if(user.lastName) {
    console.log('Hello', user.lastName.toUpperCase())
}
}

interface User {
    login: string,
    email: string,
    password: string,
    isOnline: boolean,
    lastVisited: Date,
}
const user1: User = {
    login: 'blabla',
    email: 'blabla@mail.ru',
    password: '12345',
    isOnline: true,
    lastVisited: new Date(),
}

interface Admin {
    login: string,
    email: string,
    password: string,
    isOnline: boolean,
    lastVisited: Date,
    role: string,
}

const admin1: Admin = {
    login: 'blabla',
    email: 'blabla@mail.ru',
    password: '12345',
    isOnline: true,
    lastVisited: new Date(),
    role: 'admin'
}
function login(user: {login: string, password: string}) {
    if (user.login.length > 0, user.password.length > 0) {
        console.log(`Hello, ${user.login}`)
    }
}

login(user1)
login(admin1)