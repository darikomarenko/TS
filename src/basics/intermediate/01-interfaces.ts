interface User {
readonly email: string,
readonly login: string,
password: string,
}
//можно далее по коду расширять

interface User {
    isOnline?: boolean,

}

// интерфейсы склееиваются

interface Person {
    readonly firstName: string,
    lastName: string,
    phone?: string,
    yearOfBirth?: number,
}

interface Employee extends User, Person {
    contrsctStart: Date,
}

export interface Developer extends Employee{
    skills: string[],
    level?: 'junior'| 'middle'| 'senior',
    phone: string,
    say(): void,
    code?: (arg: string) => void,

}

